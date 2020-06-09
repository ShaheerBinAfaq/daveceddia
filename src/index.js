import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import MediaCard from './MediaCard';
//import Gate from './Gate';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <MediaCard title="Shaheer" body="look at this handsome boi!" src=".\timetable.jpg" />
    <Gate isOpen={false} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
