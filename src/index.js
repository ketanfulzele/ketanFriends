import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker'
import {robots} from './robots'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();



























                                // basics of react components 
                                // creating the components and dump it to root

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Hello greeting={'Hello ' + 'Ketan'} /> 
//     {/* calling the components here and showing that components on the web page  */}
//   </React.StrictMode>
// );
              //  or
// ReactDOM.render(<App /> , document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
