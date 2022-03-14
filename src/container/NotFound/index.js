import React from 'react';

const NotFound = ({ staticContext }) => {
  if (staticContext) {
    staticContext.status = 404;
  }

  return (
    <div>
      <h3>Sorry, can’t find that.</h3>
    </div>
  );
};

export default NotFound;
