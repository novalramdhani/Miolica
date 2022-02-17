import React from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import useTheme from 'hooks/useTheme';

export default function HomePage() {
    const theme = useTheme();
    const { toggleTheme } = theme;

    const handleChangeTheme = () => toggleTheme();

    return (
        <div className="container p-8 mx-auto min-h-screen flex justify-center items-center ">
            <div className="text-center">
                <h1 className="text-4xl mb-2 font-bold">
                    Welcome to the Home Page!
                </h1>

                <p className="text-base">
                    This is the Home Page.
                </p>

                <button
                    type="button"
                    className="mt-2 py-3 px-4 font-medium transition-all duration-300 ease-in-out rounded border-0 bg-slate-200 text-blue-500 hover:bg-slate-300
                    dark:bg-slate-800 dark:text-blue-500 dark:hover:bg-slate-700"
                    onClick={handleChangeTheme}
                >
                    {theme.isDark ? (
                        <RiMoonClearLine className="inline-block text-xl" />
                    ) : (
                        <RiSunLine className="inline-block text-xl" />
                    )}
                </button>
            </div>
        </div>
    );
}
