# CodeSocial

A full-featured social media web application built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**
  - Local authentication with email/password
  - Google OAuth integration
  - JWT-based authentication
  - Session management

- **Social Features**
  - Create, read, update, and delete posts
  - Comment on posts
  - Like/unlike posts
  - User profiles with avatars
  - Follow/unfollow users

- **User Interface**
  - Responsive design
  - Modern UI with SCSS
  - Flash notifications
  - Real-time updates

## Tech Stack

- **Backend**
  - Node.js
  - Express.js
  - MongoDB with Mongoose
  - Passport.js for authentication

- **Frontend**
  - EJS templating engine
  - SCSS for styling
  - JavaScript
  - Bootstrap (for responsive design)

- **Authentication**
  - Passport.js
  - JWT (JSON Web Tokens)
  - Google OAuth 2.0

- **Database**
  - MongoDB
  - Mongoose ODM

## Prerequisites

Before running this project, make sure you have installed:
- Node.js (v14 or higher)
- MongoDB
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imAnmolGupta/codesocial.git
   cd codesocial
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/codesocial_development
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret
   ```

4. Start MongoDB:
   ```bash
   mongod
   ```

5. Run the application:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:8000`

## Project Structure

```
codesocial/
├── assets/
│   ├── scss/         # SCSS stylesheets
│   └── css/          # Compiled CSS
├── config/           # Configuration files
├── controllers/      # Route controllers
├── models/          # Database models
├── routes/          # Application routes
├── uploads/         # User uploaded files
├── views/           # EJS templates
├── index.js         # Application entry point
└── package.json     # Project dependencies
```

## API Endpoints

### Authentication
- `POST /users/sign-up` - User registration
- `POST /users/sign-in` - User login
- `GET /users/sign-out` - User logout
- `GET /auth/google` - Google OAuth login

### Posts
- `GET /posts` - Get all posts
- `POST /posts/create` - Create a new post
- `DELETE /posts/:id` - Delete a post
- `POST /posts/:id/like` - Like a post
- `POST /posts/:id/unlike` - Unlike a post

### Comments
- `POST /posts/:id/comments` - Add a comment
- `DELETE /comments/:id` - Delete a comment

### User Profile
- `GET /users/profile/:id` - Get user profile
- `POST /users/update` - Update user profile
- `POST /users/avatar` - Upload user avatar

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development Process

The project was developed in the following stages:

1. Initial project setup and directory structure
2. Basic routing and controller setup
3. View engine and layout implementation
4. User authentication system
5. Database schema and models
6. Post and comment features
7. User interface and styling
8. Social authentication
9. Profile features and avatar upload
10. Final optimizations and updates

## Security Features

- Password hashing
- Session management
- CSRF protection
- XSS prevention
- Secure file uploads
- Environment variable protection

## Future Improvements

- Real-time chat functionality
- Email notifications
- Advanced search features
- Post sharing capabilities
- Mobile application
- API rate limiting
- Enhanced security features

## License

This project is licensed under the ISC License.

## Author

Anmol Gupta

## Acknowledgments

- Express.js documentation
- MongoDB documentation
- Passport.js documentation
- Google OAuth documentation 