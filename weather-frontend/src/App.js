import './style/combine.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppHeader from './components/app-header';
import WeatherHome from './container/weather-home';
import HelpPage from './container/help';

const logger = createLogger({});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppHeader></AppHeader>
          <Switch>
            <Route exact path="/">
              <Redirect to="/weather-home" />
            </Route>
            <Route path="/weather-home" component={WeatherHome}></Route>
            <Route path="/help" component={HelpPage} ></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
