import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route, staticContext }) => {
  // console.log(staticContext);

  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default App;
