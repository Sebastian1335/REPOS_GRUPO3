import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h1
        style={{ cursor: 'pointer' }}
        onClick={handleLoginClick}
      >
        Login
      </h1>
    </div>
  );
}

export default HomePage;