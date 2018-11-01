import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import SearchBar from './SearchBar/SearchBar';
import MovieDetail from './MovieDetail/MovieDetail';
import MovieList from './MovieList/MovieList';

const Home = () => (
  <div>
    Home
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <SearchBar />
          {/* <MovieList /> */}
          <Switch>
            <Route exact path='/movieList' component={MovieList}></Route>
            <Route exact path='/movieDetail/:id' component={MovieDetail}></Route>
            {/* <Route path='/' component={}></Route> */}
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  )
};

const mapStateToProps = state => {
  console.log(state);
  return {
    movies: state.movies.movies
  }
};

export default connect(mapStateToProps)(App);