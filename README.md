# Model-View-Controller (MVC) Challenge: Tech Blog

This project is a web application that allows users to create an account, log in, and post articles to a public forum. Users can view, edit, and delete their own posts, as well as view posts from other users. The application is built using Node.js and the Express framework, with Sequelize as the ORM for the MySQL database. The front-end is built using Handlebars.js as the template engine, with Bootstrap for styling. The application uses sessions and cookies for user authentication and authorization. It also uses AJAX for some dynamic functionality, such as deleting a post without refreshing the page.

## Features
- Create new user accounts
- Login and logout
- Create, edit, and delete blog posts
- Comment on posts, delete comments
- View all blog posts from all users


## Getting Started

### Configuration

Before running the app, you'll need to set up a few environment variables. Create a new file called `.env` in the root of your project and add the following:
```env
DB_NAME = blog_db
DB_USER = YOUR_DB_USER_NAME
DB_PASSWORD = YOUR_DB_USER_PASSWORD
```

### Installation

Describe how to install the project and its dependencies.
```bash
npm install
```


### Create the MySQL database by running the following command: 
 ```bash
 mysql -u root -p
 ```

Enter your MySQL password, and then run the following SQL command:
```sql
CREATE DATABASE blog_db;
```


### Usage
```bash
node app.js
```
## Routes
- GET `/` - Home page
- GET `/login` - Login page
- POST `/login` - Login user
- GET `/signup` - Signup page
- POST `/signup` - Create new user
- GET `/logout` - Logout user
- GET `/dashboard` - User dashboard
- POST `/posts/` - Create new post
- GET `/posts/:id` - View single post
- PUT `/posts/:id` - Update post
- DELETE `/posts/:id` - Delete post

## License
All rights reserved.
