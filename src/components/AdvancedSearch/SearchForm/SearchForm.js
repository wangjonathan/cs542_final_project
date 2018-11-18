import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Message,
  Form,
  Dropdown,
  Button,
  Transition,
  Segment
} from 'semantic-ui-react';
import MovieSearchForm from './MovieSearchForm';
import ReviewSearchForm from './ReviewSearchForm';
import { categoryOptions, sortByOptions } from '../../../../constant/options';
import { fetchMoviesByRating } from '../../../actions/movies';
import { setMovieSearch, isAdvancedSearchLoading } from '../../../actions/advancedSearch';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleDirectorChange = this.handleDirectorChange.bind(this);
    this.handleActorChange = this.handleActorChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      category: 'movie',
      movieSearch: {
        ratingStart: 1,
        ratingEnd: 10,
        genres: [],
        yearStart: 1991,
        yearEnd: 2016
      },
      reviewSearch: {}
    };
  }

  handleCategoryChange(e, { value }) {
    this.setState({
      category: value
    });
  }

  handleRatingChange(e, { className, value }) {
    if (className === 'ratingStart') {
      this.setState({
        movieSearch: Object.assign({}, this.state.movieSearch, {
          ratingStart: +value
        })
      });
    } else {
      this.setState({
        movieSearch: Object.assign({}, this.state.movieSearch, {
          ratingEnd: +value
        })
      });
    }
  }

  handleYearChange(e, { className, value }) {
    if (className === 'yearStart') {
      this.setState({
        movieSearch: Object.assign({}, this.state.movieSearch, {
          yearStart: +value
        })
      });
    } else {
      this.setState({
        movieSearch: Object.assign({}, this.state.movieSearch, {
          yearEnd: +value
        })
      });
    }
  }

  handleGenreChange(e, { value }) {
    this.setState({
      movieSearch: Object.assign({}, this.state.movieSearch, {
        genres: value
      })
    });
  }

  handleDirectorChange(e) {
    this.setState({
      movieSearch: Object.assign({}, this.state.movieSearch, {
        director: e.target.value
      })
    });
  }

  handleActorChange(e) {
    console.log(e.target.value);
    this.setState({
      movieSearch: Object.assign({}, this.state.movieSearch, {
        actor: e.target.value
      })
    });
  }

  handleSearch() {
    const { movieSearch } = this.state;
    // console.log(movieSearch);
    this.props.fetchMoviesByRating(movieSearch);
    this.props.setMovieSearch(movieSearch);
    this.setState({
      category: 'movie',
      movieSearch: {
        ratingStart: 1,
        ratingEnd: 10,
        genres: [],
        yearStart: 1991,
        yearEnd: 2016,
        director: '',
        actor: ''
      },
      reviewSearch: {}
    });
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { genreOptions, handleSubmit, isLoading } = this.props;
    const { category, movieSearch, visible = true } = this.state;
    return (
      <div>
        <Message attached header='Customize Your Search' />
        <Form className='attached fluid segment' loading={isLoading}>
          <Form.Field>
            <label>Show me information about</label>
            <Dropdown options={categoryOptions} defaultValue={categoryOptions[0].value} onChange={this.handleCategoryChange} />
          </Form.Field>
          {category && (
            category === 'movie' ?
              <MovieSearchForm
                genres={movieSearch.genres}
                genreOptions={genreOptions}
                movieSearch={movieSearch}
                handleRatingChange={this.handleRatingChange}
                handleGenreChange={this.handleGenreChange}
                handleYearChange={this.handleYearChange}
                handleDirectorChange={this.handleDirectorChange}
                handleActorChange={this.handleActorChange}
              />
              :
              <ReviewSearchForm />
          )}
          <Form.Field>
          </Form.Field>
          <Button primary type='submit' onClick={this.handleSearch}>Search</Button>

        </Form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { movieSearch, isLoading = false } = state.advancedSearch;
  const { genres } = state.movies;
  return {
    movieSearch,
    genreOptions: genres.map(genre => ({
      key: genre,
      value: genre,
      text: genre
    })),
    isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMoviesByRating(movieSearch) {
      dispatch(fetchMoviesByRating(movieSearch));
    },
    setMovieSearch(movieSearch) {
      dispatch(setMovieSearch(movieSearch));
    },
    isAdvancedSearchLoading(isLoading) {
      dispatch(isAdvancedSearchLoading(isLoading));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);