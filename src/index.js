import 'bootstrap/dist/css/bootstrap.css';

import React,{lazy , Suspense} from 'react';

//import {render} from 'react-snapshot';

import ReactDOM from 'react-dom';





import {BrowserRouter } from 'react-router-dom';

import './style.css';



const App = lazy(() => import('./components/app'));


const renderLoader = () => <p>Loading</p>;


ReactDOM.render(
  <Suspense fallback={renderLoader()}>
    <React.StrictMode>
      <BrowserRouter >
        <App />
        </BrowserRouter>,
    </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
  );
  



//build": "react-scripts build && react-snapshot"