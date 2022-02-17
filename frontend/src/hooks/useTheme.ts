/* eslint-disable no-underscore-dangle */
import React from 'react';

export default function useTheme() {
    const [theme, setTheme] = React.useState<string>('light');

    const isDark = theme === 'dark';

    const setLocalTheme = (_theme: string) => {
        localStorage.setItem('theme', _theme);
        setTheme(_theme);
    };

    const loadTheme = () => {
        const _theme = localStorage.getItem('theme');
        if (_theme) {
            setLocalTheme(_theme);

            if (_theme === 'dark') document.documentElement.classList.add('dark');
        }
    };

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setLocalTheme('light');
            return;
        }

        document.documentElement.classList.add('dark');
        setLocalTheme('dark');
    };

    React.useEffect(() => {
        loadTheme();
    }, []);

    return {
        isDark,
        loadTheme,
        toggleTheme,
    };
}
