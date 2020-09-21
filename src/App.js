import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import LandingPage from './components/landingPage.js';
import StartTrial from './components/startTrial.js';
import SuccessPage from './components/successPage.js';
import VerifyOtp from './components/verifyOtp.js';
import store from './store';
import {Provider} from 'react-redux';
import PageNotFound from './components/pageNotFound.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/startTrial" component={StartTrial} />
            <Route path="/successPage" component={SuccessPage} />
            <Route path="/verifyOtp" component={VerifyOtp} />
            <Route  component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
