import React from 'react';
import {
  Message,
  Icon,
  Input,
  Form,
  Dropdown,
  Button
} from 'semantic-ui-react';
import { categoryOptions, ratingOptions, yearOptions } from '../../../../constant/options';

const MovieSearchForm = props => {
  const { movieSearch, genres, genreOptions, handleRatingChange, handleGenreChange, handleYearChange, handleDirectorChange, handleActorChange } = props;
  const { ratingStart, ratingEnd, yearStart, yearEnd } = movieSearch;
  return (
    <div>
      <Form.Field inline width={1}>
        <label>Rating</label>
        <Dropdown scrolling className={'ratingStart'} inline options={ratingOptions} value={ratingStart} onChange={handleRatingChange} />
        <span>to</span>
        <Dropdown scrolling className={'ratingEnd'} inline options={ratingOptions} value={ratingEnd} onChange={handleRatingChange} />
      </Form.Field>
      <Form.Field>
        <label>Genre</label>
        <Dropdown clearable placeholder='Select Genre' value={genres} fluid multiple search selection options={genreOptions} onChange={handleGenreChange} />
      </Form.Field>
      <Form.Field>
        <label>Year</label>
        <Dropdown scrolling className={'yearStart'} inline options={yearOptions} value={yearStart} onChange={handleYearChange} />
        <span>to</span>
        <Dropdown scrolling className={'yearEnd'} inline options={yearOptions} value={yearEnd} onChange={handleYearChange} />
      </Form.Field>
      <Form.Field>
        <label>Director</label>
        <input placeholder='Enter Director' onChange={handleDirectorChange} />
      </Form.Field>
      <Form.Field>
        <label>Actor</label>
        <input placeholder='Enter Actor' onChange={handleActorChange} />
      </Form.Field>
    </div>
  )
};

export default MovieSearchForm;