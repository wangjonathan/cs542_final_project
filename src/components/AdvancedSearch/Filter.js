import React, { Component } from 'react'
import {
  Menu,
  MenuItem,
  Icon,
  Header
} from 'semantic-ui-react'

const Filter = props => {
  const { filterBy, handleFilterClick, genres, years } = props;
  const { filterByGenre, filterByYear } = filterBy;
  return (
    <div>
      <Header size={'small'}>
        <Icon name='filter' />
        filter
      </Header>
      <Menu size={'large'} vertical>
        {/* <Menu.Item>
        <Menu.Header>Year</Menu.Header>

        <Menu.Menu>
          <Menu.Item
            name='2016'
            active={filters.includes('2016')}
            onClick={handleFilterClick}
          />
          <Menu.Item
            name='2015'
            active={filters.includes('2015')}
            onClick={handleFilterClick}
          />
        </Menu.Menu>
      </Menu.Item> */}
        {genres.length > 0 &&
          <Menu.Item>
            <Menu.Header>Genre</Menu.Header>
            <Menu.Menu>
              {genres.map(genre =>
                <MenuItem
                  key={genre}
                  name={'genre'}
                  content={genre}
                  active={filterByGenre.includes(genre)}
                  onClick={handleFilterClick} />)}
            </Menu.Menu>
          </Menu.Item>
        }

        <Menu.Item>
          {years.length > 0 && <Menu.Header>Year</Menu.Header>}
          <Menu.Menu>
            {years.map(year =>
              <MenuItem
                key={year}
                name={'year'}
                content={year}
                active={filterByYear.includes(year)}
                onClick={handleFilterClick} />)}
          </Menu.Menu>
        </Menu.Item>

        {/* <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='rails'
              active={filters === 'rails'}
              onClick={handleFilterClick}
            />
            <Menu.Item
              name='python'
              active={filters === 'python'}
              onClick={handleFilterClick}
            />
            <Menu.Item name='php' active={filters === 'php'} onClick={handleFilterClick} />
          </Menu.Menu>
        </Menu.Item> */}

        {/* <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
              active={filters === 'shared'}
              onClick={handleFilterClick}
            />
            <Menu.Item
              name='dedicated'
              active={filters === 'dedicated'}
              onClick={handleFilterClick}
            />
          </Menu.Menu>
        </Menu.Item> */}

        {/* <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={filters === 'email'} onClick={handleFilterClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='faq' active={filters === 'faq'} onClick={handleFilterClick}>
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item> */}
      </Menu>
    </div>

  )
};

export default Filter;
