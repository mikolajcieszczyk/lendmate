# LendMate

LendMate is a peer-to-peer lending application that allows users to borrow and lend money in a secure and efficient manner. It incorporates KYC (Know Your Customer) authentication to ensure the integrity and safety of the lending process.

## Features

- User registration and authentication with KYC verification
- Borrowing and lending money between registered users
- Managing loan requests and repayments
- Dashboard with overview of user's loans and transactions
- Secure and efficient communication through GraphQL API
- Responsive and intuitive user interface built with React and Tailwind CSS
- State management with Redux Toolkit

## Tech Stack

### Backend

- GraphQL: A query language for APIs, used for efficient and flexible communication between the client and the server.
- Apollo Server: An open-source GraphQL server that integrates with various frameworks and data sources.
- MongoDB: A popular NoSQL database used for storing application data.
- Mongoose: An object modeling library for MongoDB and Node.js, providing a convenient way to interact with the database.

### Frontend

- Vite: A fast and modern build tool that enables quick development and optimized production builds.
- React: A JavaScript library for building user interfaces.
- Typescript: A statically typed superset of JavaScript, providing improved tooling and code quality.
- Tailwind CSS: A utility-first CSS framework for rapid UI development, with customizable and responsive design.
- Redux Toolkit: A set of tools and best practices for efficient state management in React applications.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database (local or remote)

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/lendmate.git
```

2. Install backend dependencies:

```
cd lendmate/backend
npm install
```
3. Set up environment variables:

```
BACKEND_PORT=4000
MONGO_ATLAS_PASSWORD=request_me_for_password
```
4. Run the backend server:

```
npm run start
```

5. Install frontend dependencies:

```
cd ../frontend
npm install
```

6. Set up environment variables:

```
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```
7. Run the frontend development server:

```
npm run dev
```

8. Open your browser and visit http://localhost:3000 to access the application.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

Please follow the existing code style and commit message conventions.

## License
This project is licensed under the MIT License.
