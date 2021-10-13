import './style/combine.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import AppHeader from './components/app-header';
import WeatherHome from './container/weather-home';


function App() {
  return (
    <div className="App">
      <Router>
      <AppHeader></AppHeader>
        <Switch>
          <Route path="/weather-home" component={WeatherHome}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
