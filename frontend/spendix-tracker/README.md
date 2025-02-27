# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- npm install tailwindcss @tailwindcss/vite
vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' <---change
export default defineConfig({
  plugins: [
    tailwindcss(),<-----add 
  ],
})


@import "tailwindcss";

 -->
<!-- npm install react-icons axios moment emoji-picker-react react-router-dom recharts react-hot-toast 

react-icons: A library for including icons in React apps.
axios: A promise-based HTTP client for making requests.
moment: A library for working with dates and times.
emoji-picker-react: A React component for adding emoji pickers.
react-router-dom: A library for handling routing in React apps.
recharts: A library for building charts with React.
react-hot-toast: A library for adding toast notifications in React.

-->

Secure login and sign-up using JWT authentication.
Displays Total Balance, Income, and Expenses in summary cards.
Add, view, delete, and export income sources.
Add, view, delete, and export expenses with category-based tracking.
Visual representation of income & expenses using Bar, Pie, and Line charts.
Displays the latest income and expense records for quick access.
Download all income and expense data in Excel format.
Works seamlessly across desktops, tablets, and mobile devices.
Sidebar menu with easy access to Dashboard, Income, Expenses, and Logout.
Hover over income/expense cards to reveal a delete button for easy

-----------------  backend  -------------
npm init -y
npm i express jsonwebtoken mongoose dotenv cors bcryptjs multer xlsx
The command npm i express jsonwebtoken mongoose dotenv cors bcryptjs multer xlsx installs several popular Node.js libraries. Here's a breakdown of what each package is used for:

express:
A web application framework for Node.js, commonly used to build web APIs and handle HTTP requests. It simplifies routing and middleware handling.

jsonwebtoken:
A library used for creating and verifying JSON Web Tokens (JWT). It's typically used for handling authentication and authorization by signing and verifying tokens.

mongoose:
An Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model data and interact with MongoDB databases in an easier and structured way.

dotenv:
A module that loads environment variables from a .env file into process.env. It's used to manage sensitive information like API keys, database credentials, and environment configurations securely.

cors:
A middleware that allows you to enable Cross-Origin Resource Sharing (CORS) in your Express app. It enables or restricts web applications from different origins to make requests to your server.

bcryptjs:
A library used to hash and compare passwords securely. It's an implementation of bcrypt hashing for Node.js that helps to securely store passwords.

multer:
A middleware used for handling multipart/form-data, which is used for uploading files. It simplifies the process of handling file uploads in Express applications.

xlsx:
A library for reading, writing, and manipulating Excel files (.xlsx). It allows you to parse Excel data, convert it to JSON, or export JSON data to Excel format.

Use Case for these Libraries:
This combination of packages is commonly used in building a backend API that involves:

User authentication (using jsonwebtoken and bcryptjs).
Handling file uploads (using multer).
Interacting with a MongoDB database (using mongoose).
Managing environment variables (using dotenv).
Enabling cross-origin resource sharing (using cors).
Working with Excel files (xlsx).
Building a server with Express (express).


npm i nodemon --save-dev
modify

"scripts": {
  "dev": "nodemon your-app.js"
}

Now you can run your app with: npm run dev