import React, { useState, useEffect } from 'react';

const SuccessMessage = ({ show }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    }
  }, [show]);

  return (
    <div className={`success-message ${isVisible ? 'visible' : ''}`}>
      <p>Email sent successfully!</p>
    </div>
  );
};

export default SuccessMessage;
