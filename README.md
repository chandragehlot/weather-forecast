# About the Weather forecast APP
This project is for weather forecasting application, which is based on [OpenWeatherMap]. 
It show the live weather details of selected cities. List of cities and provision to add new cities provided in the application.

Application has two parts
1. Front-end to render web application
2. Back-end to provide APIs for 
    - List of cities added already
    - Adding new city 
    - Weatherdetails for selected city. Under the hood use OpenWeatherMap

`Conditions for City Name:`
>Only alphabates allowed to add new city name, any other charters it will throw error.
>As of now displaying errors on UI is not implemented, so errors will be displayed on Console only.
>If city Name exist with OpenWeatherMap API, then it will show the weather details, else throw error.

# Tech
-**FrontEnd** : ReactJS, ReduxJS, Redux Thunk (redux middleware), AXIOS, SCSS, Create-react-app CLI
-**BackEnd** : NodeJS, ExpressJS, MongoDB, Mongoose

# Installation
**Pre-requisite :** 
- MongoDB setup in local machine and up and running
- Documentation : https://docs.mongodb.com/guides/server/install/
- Node JS setup in local machine

**FrontEnd**
Open weather-frontend in terminal
```sh
yarn install
yarn run start
```
Front will start on port 3000. Open browser and run url 'http://localhost:3000'
**FrontEnd**
Open weather-backend in terminal
```sh
yarn install
yarn run dev
```
Backend Server will start on port 8000 and expose endpoints
- Fetch City List 'http://localhost:8000/api/v1/city' - GET
- Add New City 'http://localhost:8000/api/v1/city' - POST
- Weather Details 'http://localhost:8000/api/v1/weather/:cityname' - GET
> Note : If .env file does not exist weather-backend folder, then change file .env.default to .env file. Or can create a new .env and paste content of .env.default

# Things to Improve
1. Unit test cases for both frontend and backend
2. Error handling on frontend side.
3. Error Boundaries for to prevent fatal collapse of frontend app
4. Update FrontEnd design for small devices.

# Screens
Desktop
![Alt text](/docs/weather-forecast-desktop.png "Desktop UI View")

Mobile
![Alt text](/docs/weather-forecast-mobile.png "Mobile UI View")

  [OpenWeatherMap]: https://openweathermap.org/