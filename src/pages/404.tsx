import React from 'react';
import { navigate } from 'gatsby';

function PageNotFound() {
  React.useEffect(() => {
    navigate('/');
  }, []);

  return null;
}

export default PageNotFound;
