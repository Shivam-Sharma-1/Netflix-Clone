# Netflix-Clone

Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.

## Screenshots

![App Screenshot1](/public/readme_assets/screenshot1.png)
![App Screenshot2](/public/readme_assets/screenshot2.png)
![App Screenshot3](/public/readme_assets/screenshot3.png)
![App Screenshot4](/public/readme_assets/screenshot4.png)
![App Screenshot4](/public/readme_assets/screenshot5.png)
![App Screenshot4](/public/readme_assets/screenshot6.png)

## Technologies used

-   Next.js
-   React
-   Tailwind CSS
-   TypeScript
-   Prisma
-   NextAuth.js

## Packages used

-   Axios
-   Bcrypt
-   Lodash
-   React-icons
-   Zustand

## Database used

-   MongoDB

## Features

-   User authentication and authorization powered by NextAuth.js
-   Dynamic routing and server-side rendering with Next.js
-   Database interaction and ORM using Prisma
-   Responsive and modern UI design with Tailwind CSS
-   Typed JavaScript with TypeScript
-   Fully responsive on all devices

## Getting Started

To get started with Netflix-Clone, follow these steps:

1. Clone the repository:

```bash
  git clone https://github.com/Shivam-Sharma-1/Netflix-Clone
```

2. Navigate to the project directory

```bash
  cd netflix-clone
```

3. Install the dependencies:

```bash
  npm install
  # or
  yarn install
```

4. Set up the environment variables:
   Create a .env file in the root directory of the project and add the following variables:

```bash
  DATABASE_URL=your_database_url
  NEXTAUTH_SECRET=your_nextauth_secret
```

5. Run the database migrations:

```bash
  npx prisma migrate dev
```

6. Start the development server:

```bash
  npm run dev
  # or
  yarn dev
```

The application should now be running on `http://localhost:3000`

## Folder Structure

The project follows a standard folder structure commonly used in Next.js applications:

-   `/pages`: Contains the Next.js page components.
-   `/public`: Stores static assets such as images and fonts.
-   `/styles`: Holds global styles and Tailwind CSS configuration.
-   `/components`: Houses reusable UI components.
-   `/lib`: Contains utility functions and API integration.
-   `/prisma`: Includes Prisma configuration and database schema.
-   `/types`: Holds TypeScript type definitions.
    Feel free to explore and modify these folders as per your project requirements.

## Website hosted URL

This website is deployed using using Vercel  
Website url: https://netflix-clone12345.vercel.app

## Contributing

Contributions are always welcome!  
If you would like to contribute to this project, please fork the repository and create a pull request.

## Authors

-   [@Shivam-Sharma-1](https://github.com/Shivam-Sharma-1)

## Acknowledgements

-   [Full Stack Netflix Clone in React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth & Vercel](https://youtu.be/mqUN4N2q4qY)

## Read more

This project was created using various open-source libraries and frameworks.

-   [Next.js docs](https://nextjs.org/docs)
-   [React docs](https://react.dev/blog/2023/03/16/introducing-react-dev)
-   [TailwindCSS docs](https://v2.tailwindcss.com/docs)
-   [Typescript docs](https://www.typescriptlang.org/docs/)
-   [Prisma docs](https://www.prisma.io/docs)
-   [NextAuth.js docs](https://next-auth.js.org/getting-started/introduction)
-   [Vercel docs](https://vercel.com/docs)
