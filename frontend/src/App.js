import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Movies from "./pages/Movies";
import AddMovieForm from "./pages/AddMovie";
import Footer from "./components/Footer";


import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            
            <Switch>
              <Route exact path="/movies/new" component={AddMovieForm} />
              <Route path="/movies" exact component={Movies} />

              <Redirect exact from="/" to="/movies" />
            </Switch>
           
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
