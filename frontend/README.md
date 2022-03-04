# Miolica Frontend

Miolica is an e-commerce application that uses React.js as the frontend and Laravel as the backend.

## MioLica Resources

1. Database Design: [Click Here](https://dbdiagram.io/d/620e660e485e433543cee43a)
2. Figma Design: [Click Here](https://www.figma.com/file/Rt1alvAw8zJNDSxnNGxrWi/Miolica-Store?node-id=0%3A1)
3. API Documentation: [Coming Soon]()

## Miolica Frontend Techstack

- [Typescript](https://www.typescriptlang.org/)
- [Reactjs PWA (Progessive Web Apps)](https://www.npmjs.com/package/cra-template-pwa-typescript)
- [Reduxjs toolkit](https://redux-toolkit.js.org/)
- [TailwindCSS](https://tailwindcss.com)

## How to use Miolica (Only Frontend)

if you want to use Miolica Frontend, you need to clone or download the repository (including the Backend), then open the frontend folder in this project `Miolica/frontend` and run the following command in the terminal:

```
$ npm install
```

then run the following command in the terminal:

```
$ npm start
```

now you can access the frontend app in the browser. you can access the app by typing the following url: `http://localhost:3000`

## How to build the frontend app and deploy it to the server

before you run the build command, you need to replace the import scss file in the `src/index.tsx` file with the following code: `import './assets/styles/style.css'`

then run the following command in the terminal:

```
$ npm run build
```

now you can deploy the app to the server by copying the `build` folder to your hosting server.
