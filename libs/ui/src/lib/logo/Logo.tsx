import React from 'react';
 import './Logo.less';

export function Logo() {
  return (
    <div>
      <h1 style={{userSelect: 'none'}}>Welcome to <span className="logo">Pabau</span>!</h1>
    </div>
  );
}

export default Logo;
