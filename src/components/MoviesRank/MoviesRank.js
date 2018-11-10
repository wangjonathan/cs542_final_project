const _ = require('lodash');
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Image, Table, Icon } from 'semantic-ui-react'

const MoviesRank = props => {
  const { movies } = props;
  const grossMovies = _.filter(movies, movie => movie.gross > 340197282);
  const result = _.orderBy(grossMovies, ['gross'], ['desc'])
  // console.log(grossMovies)
  return (
    <div>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Movie</Table.HeaderCell>
            <Table.HeaderCell>Gross</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!result || result.map(movie => (
            <Table.Row key={movie.movie_id}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={movie.image} rounded size='mini' />
                  <Header.Content>
                    <Link to={`/movieDetail/${movie.movie_id}`}>
                      {movie.title}
                    </Link>
                    {/* <Header.Subheader>{}</Header.Subheader> */}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell><Icon name='dollar sign' fitted />{movie.gross}</Table.Cell>
            </Table.Row>
          ))}
          {/* <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                <Header.Content>
                  Lena
              <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
                <Header.Content>
                  Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
                <Header.Content>
                  Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                <Header.Content>
                  Mark
              <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>11</Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = state => {
  const { movies } = state;
  return {
    movies: movies.movies
  }
};

export default connect(mapStateToProps)(MoviesRank);