// AppContainer.jsx
import React from 'react';

const AppContainer = ({ children }) => {
  return (
    <div 
      className="app-container" 
      style={{ 
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        position: 'relative'
      }}
    >
      <div 
        className="content-wrapper"
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0 auto',
          overflowX: 'hidden'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AppContainer;