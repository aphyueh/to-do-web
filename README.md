# TodoBreeze - React Website

TodoBreeze is a responsive web application built with React and Tailwind CSS, allowing users to manage their tasks efficiently with a clean and intuitive interface. It features user authentication (login and signup) and a to-do list with progress tracking. The app is deployed on Vercel and integrates with a GraphQL backend hosted on AWS Lambda.

## Features

- **User Authentication**: Secure login and signup functionality using GraphQL mutations.
- **To-Do List Management**: Add, delete, and toggle the completion status of tasks.
- **Progress Tracking**: Visual progress bar displaying the percentage of completed tasks.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **GraphQL Backend**: Integrates with a backend hosted on AWS Lambda ([to-do-backend](https://github.com/aphyueh/to-do-backend)).
- **Deployment**: Hosted on Vercel for fast and reliable performance ([Live Demo](https://to-do-website-liard.vercel.app/)).

## Screenshots
<img src="/public/demo-login-screenshot.png" alt="Screenshot of login screen">
<img src="/public/demo-signup-screenshot.png" alt="Screenshot of signup screen">
<img src="/public/demo-todo-screenshot.png" alt="Screenshot of Todo screen">

## Tech Stack

- **Frontend**: React, Tailwind CSS, Apollo Client (for GraphQL queries/mutations)
- **Backend**: GraphQL API hosted on AWS Lambda ([to-do-backend](https://github.com/aphyueh/to-do-backend))
- **Deployment**: Vercel
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm 
- A running instance of the GraphQL backend ([to-do-backend](https://github.com/aphyueh/to-do-backend))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aphyueh/to-do-web.git
   cd to-do-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the GraphQL endpoint:
   - Update the Apollo Client configuration in `src/index.js` to point to your GraphQL backend URL (e.g., the AWS Lambda endpoint from [to-do-backend](https://github.com/aphyueh/to-do-backend)).

4. Run the app in development mode:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Ejects the Create React App configuration (one-way operation).

For more details, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Deployment

The app is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel via the Vercel dashboard.
3. Configure environment variables (if any) in Vercel to point to your GraphQL backend.
4. Deploy the app and access it via the provided Vercel URL.

Visit the live demo: [https://to-do-website-liard.vercel.app/](https://to-do-website-liard.vercel.app/)

## Project Structure

- `src/`
   - `apollo/`: `provider.js` 
   - `assets/`: Images and CSS files (e.g., `login-bg.png`, `signup-bg.png`, `todobreeze.css`).
   - `pages/`: React components, including `LoginPage` and `TodoPage`.
   - `index.js`: Entry point with Apollo Client setup.
   - `App.js`
   - '
- `public/`: Static assets like `todobreeze-logo.png`.

## Usage

1. **Login/Signup**:
   - Navigate to the login page.
   - Enter your email and password to log in, or provide a name, email, and password to sign up.
   - Upon successful authentication, you’ll be redirected to the to-do list page.

2. **Managing Tasks**:
   - Add a new task using the input form.
   - Toggle task completion by clicking the checkbox.
   - Delete tasks using the trash icon.
   - View your progress with the progress bar and task statistics.

3. **Logout**:
   - Click the "Logout" button to clear your session and return to the login page.

## Author

**Amber Pang** - [GitHub Profile](https://github.com/aphyueh)
