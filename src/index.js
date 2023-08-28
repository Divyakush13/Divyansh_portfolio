import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  );

// Add the internet connection status check
const handleOnlineStatus = () => {
  const isOnline = navigator.onLine;
  ReactDOM.render(
    <React.StrictMode>
      <App isOnline={isOnline} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

window.addEventListener('online', handleOnlineStatus);
window.addEventListener('offline', handleOnlineStatus);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
