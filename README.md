# About the APP

This project is for weather forecasting application. The application is fully responsive. It display list of cities with an option to add new city along with current Weather details of selected city. Different cities can be selected from city list and corresponding Weather details will render.


# Parts of APP

Application has two parts 
    a) front-end to render web application
    b) back-end to provide APIs for city list and add new city.

Front-end application use Open Weather API to show current weather details. 
NOTE : (As per the currnet implementation the weather APIs getting called from browser, but it should be called via node js backend, so the API token will not expose in browser)


# Technology Stack used

1. FrontEnd : ReactJS, ReduxJS, Thunk(redux middleware), AXIOS, SCSS, Create-react-app CLI
2. BackEnd : NodeJS, ExpressJS, MongoDB, Mongoose


# Set up intructions

Pre-requisite : 

1. MongoDB setup in local machine and up and running
Use Documentation : https://docs.mongodb.com/guides/server/install/
2. Node JS setup in local machine

Setup steps ; 

1. Go to weather-backend folder and change file .env.default to .env file. Or can create a new .env and paste content of .env.default
2. Open weather-backend and weather-frontend in seperate terminals
3. yarn install for both weather-backend and weather-frontend
4.  Run below commands for development
    a) weather-backend : yarn run dev 
    b) weather-frontend : yarn run start
5. add new cities and see the live weather details for cities.

# Things to Improve
1. Unit test cases for both frontend and backend
2. Error handling on frontend side.
3. Error Boundaries for to prevent fatal collapse of frontend app
4. Update FrontEnd design for small devices.
5. Use weather API's vio node js backend layer, so that API token not expose to use in brwoser.
