## About AnimAPI
>React app created using the Jikan REST API, Node.js, and React-Bootstrap.
<br />
Users can vist this app to search for anime and get more details about them, like what it's about or how many episodes it has. There is also a list at the top showing the most popular anime if you need some ideas. All of the data provided comes from Jikan's API that is sourced by data pulled out of https://myanimelist.net/ -- the world's most active online anime and manga community and database.<br />

## Project Description
>React App will include: <br />

Header in the App Component <br />
Navi in the App Component <br />
MainContent in the App Component <br />
About in the MainContent Component <br />
AnimeCard in the MainContent Component <br />
AnimeDetails in the AnimeCard Component <br />
Footer in the App Component <br />

This app is fully frontend at the moment, but there is going to be a backend implemented in the future using Mongoose and Express. <br />

General flow of project completion involved creating the base react app, installing necessary npm packages, splitting different sections of the app into components and then fitting those into their respective layouts for the way the App Component would render. Fetch API calls were used with async and await syntax to pull data into certain components. From there, the app was styled with React-bootstrap and modified later with a lot of static css.

## User Stories
- User should be able to view list of anime searched based on what they entered in the search bar.<br />
- User should be able to select any of the popular anime links at the top to be redirected to a page with more details about them. <br />
- User should be select an anime to view more details about it.<br />

## Unsolved Problems
- Put placeholder text in for any anime searched that has no synopsis.<br />
- Handle fetch call errors and conditional rendering for when nothing is typed in the search bar.<br />


## Stretch Goals
- Add the backend functionality to implement full CRUD capabilities.<br />
