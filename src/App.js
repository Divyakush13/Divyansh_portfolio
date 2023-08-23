// import React from 'react';
// import Header from "../src/componentes/Header"
// const App = () => {
//   return (
//     <>
//       <Header/>
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import Header from "../src/componentes/Header";

const App = () => {
  const [isOnline, setIsOnline] = useState(true); // Assume online by default

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return (
    <>
      <Header isOnline={isOnline} />
    </>
  );
};

export default App;
