import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter className="container">
        <div>
          <Header />
          {/* <Route exact path='/' component={}></Route>
          <Route path='/movie' component={}></Route> */}
          {/* <Route path='/' component={}></Route> */}
        </div>
      </BrowserRouter>
    </div>
  )
};
export default App;