import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center gap-3 logo'>
      {windowWidth <= 1000 ? (
        <NavLink to="/"><img src="/images/logo.png" alt="" /></NavLink>
      ) : (
        <NavLink to="/" className="d-flex align-items-center justify-content-center gap-4">
          <img src="/images/logo.png" alt="" />
          <div className="logoText">ViVa Food</div>
        </NavLink>
      )}
    </div>
  );
};

export default Logo;
