import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history'
import Home from './Home/Home';
import Header from './Header';
import SearchBar from './SearchBar/SearchBar';
import MovieDetail from './MovieDetail/MovieDetail';
import MovieList from './MovieList/MovieList';
import SignUpForm from './SignUpForm/SignUpForm';
import SignInForm from './SignInForm/SigninForm';
import history from '../history/history';
import CustomizedSearch from './AdvancedSearch/AdvancedSearch';
import Signout from './Signout';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/movieList' component={MovieList}></Route>
            <Route exact path='/movieDetail/:id' component={MovieDetail}></Route>
            <Route exact path='/signup' component={SignUpForm}></Route>
            <Route exact path='/signin' component={SignInForm}></Route>
            <Route exact path='/signout' component={Signout}></Route>
            <Route exact path='/advancedSearch' component={CustomizedSearch}></Route>
          </Switch>
        </div>

      </Router>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
};

export default connect(mapStateToProps)(App);