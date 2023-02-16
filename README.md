# MN Critter Catcher

## Description

This mobile-first web-based application that helps users to to identify and track animals native to Minnesota. Currently there is a database with entries for 65 animals that can be searched directly or through a system of intuitive filters. Each species has a detailed page including photos, descriptions of markings, lengths, weights and wingspans to help user identify unknown critters. 
Users have a personal sighting feed that lists all of the animals they've seen along with access to a public feed where they can view sighting posts from other users. Detailed sighting views may include an image, caption and Google maps integration with a marker indicating where the critter was spotted. 
The Add A Sighting page can be accessed from either a detailed species page, in which case it autofills species information, or from the navigation bar. Users have the option to add captions, upload an image, tag their sighting location and make the sighting visible publicly from this form.
The user's profile page includes a profile picture, username and sighting statistics, logout button and access to an edit profile page where the profile picture can be updated.
Lastly there is an about page for this project that lists contact information and technologies used.

## Sample Images

The Movie List/Home screen.
![Alt text](public/images/MovieList.png)

A Movie Details page.
![Alt text](public/images/Details.png)

The URL for each details page includes that movie's title.

![Alt text](public/images/URLbar.png)

The 'Add Movie' page.
![Alt text](public/images/AddMovie.png)

## Installation
1. Fork and clone this repository.
2. Create a database named "saga_movies_weekend".
3. Run the six SQL queries in the database.sql file to set up tables and populate them with sample data. This project was made with Postgres and Postico and will work nicely with that duo.
4. From your terminal run 'npm install'.
5. Then run 'npm run server' and 'npm run client' within separate terminal instances. This should automatically open a window in your browser to the Movie List home page.

## Built With
- React
- Redux
- Saga
- Javascript
- HTML
- CSS
- Node.js
- Express
- PostgreSQL
- Material UI