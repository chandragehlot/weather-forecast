# About the APP

This project is for weather forecasting application. The application is fully responsive. It display list of cities with an option to add new city along with current Weather details of selected city. Different cities can be selected from city list and corresponding Weather details will render.


# Parts of APP

Application has two parts 
    a) front-end to render web application
    b) back-end to provide API for city list and add new city.
Front-end application use Open Weather API to show current weather details.


# Technology Stack used

FrontEnd : ReactJS, ReduxJS, Thunk(redux middleware), AXIOS, SCSS, Create-react-app CLI
BackEnd : NodeJS, ExpressJS, MongoDB, Mongoose


# Set up intructions

Pre-requisite : MongoDB setup in local machine and up and running
Use Documentation : https://docs.mongodb.com/guides/server/install/


1) Go to weather-backend folder and change file .env.default to .env file. Or can create a new .env and paste content of .env.default
2) open weather-backend and weather-frontend in seperate terminals
3) Run below commands for development
    a) weather-backend : npm run dev 
    b) weather-frontend : npm run start
4) add new cities and see the live weather details for cities.

# Things to Improve
1. Unit test cases for both frontend and backend
2. Error handling on frontend side.
3. Error Boundaries for to prevent fatal collapse of frontend app
4. Update FrontEnd design for small devices.
