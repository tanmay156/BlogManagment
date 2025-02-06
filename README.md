# Blog Management System

## Overview
The **Blog Management System** is a web application that allows users to create, edit, view, and manage blog posts efficiently. It provides authentication, CRUD operations, and a user-friendly interface for seamless blogging.

## Features
- User authentication (Login & Signup)
- Create, Read, Update, and Delete (CRUD) operations for blog posts
- View individual blog posts with timestamps
- Logout functionality with user session management
- Responsive UI using Bootstrap
- Navigation and routing using React Router

## Technologies Used
### Frontend:
- React.js
- React Router
- Bootstrap 5
- Axios (for API calls)

### Backend:
- Spring Boot (Java)
- Spring MVC
- Hibernate & JPA (for database management)
- MySQL (database)

## Installation & Setup
### Backend:
1. Clone the repository:
   ```sh
   git clone https://github.com/tanmat156/BlogManagement.git
   cd blog-management/backend
   ```
2. Configure database connection in `application.properties`.
3. Build and run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend:
1. Navigate to the frontend folder:
   ```sh
   cd blog-management/front
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints
- `GET /posts` - Fetch all blog posts
- `GET /posts/{id}` - Fetch a single post by ID
- `POST /posts` - Create a new post
- `PUT /posts/{id}` - Update a post
- `DELETE /posts/{id}` - Delete a post
- `POST /` - User login
- `POST /signup` - User signup
- `POST /logout` - User logout

## Usage
1. Sign up or log in to the application.
2. Create new blog posts using the **Create Post** page.
3. View individual posts and edit or delete them as needed.
4. Click **Logout** to end your session.
