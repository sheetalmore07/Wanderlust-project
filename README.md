# Wanderlust 🌍

Wanderlust is a travel listing web application where users can explore different places, share destinations, and read reviews from other travellers.

I built this project to get a better understanding of full-stack web development and how different technologies work together in a real-world application. While working on it, I got hands-on experience with backend development, database management, authentication, and building dynamic web pages.

## Features

- **User Authentication:** Users can sign up, log in, and log out.
- **Explore Listings:** View different travel destinations added by users.
- **Create Listings:** Add a new place with its title, description, location, price, and image.
- **Edit & Delete Listings:** Users can update or delete their own listings.
- **Reviews:** Users can leave reviews and ratings on listings.
- **Authorization:** Only the listing owner can edit or delete their listings.
- **Responsive Design:** The website is designed to work on different screen sizes.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js

## Getting Started

To run this project on your local machine:

**1. Clone the repository**

```bash
git clone https://github.com/sheetalmore07/Wanderlust-project.git
```

**2. Move into the project directory**

```bash
cd Wanderlust
```

**3. Install the dependencies**

```bash
npm install
```

**4. Start the server**

```bash
node app.js
```

The application will run at:

`http://localhost:8080`

## Project Structure

```text
Wanderlust/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── package.json
└── README.md
```

## What I Learned

Working on Wanderlust helped me understand several concepts that I had mostly learned separately before building this project.

Some of the things I got to work with include:

- Creating RESTful routes using Express.
- Connecting MongoDB with a Node.js application.
- Implementing user authentication and authorization.
- Performing CRUD operations.
- Working with middleware and error handling.
- Using EJS to display dynamic content.
- Organizing code using routes, controllers, and models.

## Future Improvements

I would like to add a few more features to the project in the future, such as:

- Search and filter options for listings.
- Map integration to show the exact location of destinations.
- Better user profile management.
- Further improvements to the UI.

Thanks for checking it out! :)