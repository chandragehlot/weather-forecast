import './style/combine.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

import AppHeader from './components/app-header';
import WeatherHome from './container/weather-home';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppHeader></AppHeader>
          <Switch>
            <Route path="/weather-home" component={WeatherHome}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
