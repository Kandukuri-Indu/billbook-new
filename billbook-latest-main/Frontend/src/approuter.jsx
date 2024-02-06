import React from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppRouter = (props) => {
    return(
        <>
        <Router basename={`${config.publicPath}`}>
             <Route render={(props)=> <AppContainer {...props}/>} />
        </Router>
         <ToastContainer />
         </>
    );    
}


export default AppRouter;