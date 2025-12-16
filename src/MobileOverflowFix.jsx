// MobileOverflowFix.jsx
import React, { useEffect } from 'react';

const MobileOverflowFix = () => {
  useEffect(() => {
    const handleMobileOverflow = () => {
      if (window.innerWidth <= 768) {
        document.body.style.overflowX = 'hidden';
        document.body.style.width = '100%';
        document.documentElement.style.overflowX = 'hidden';
        document.documentElement.style.width = '100%';
      }
    };

    handleMobileOverflow();
    window.addEventListener('resize', handleMobileOverflow);

    return () => {
      window.removeEventListener('resize', handleMobileOverflow);
      document.body.style.overflowX = '';
      document.body.style.width = '';
      document.documentElement.style.overflowX = '';
      document.documentElement.style.width = '';
    };
  }, []);

  return null;
};

export default MobileOverflowFix;