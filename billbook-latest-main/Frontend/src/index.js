import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './approuter';

// boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js';
import "./assets/css/feather.css";
// import "./assets/plugins/icons/ionic/ionicons.css";
import  bootstrap from 'bootstrap';

//Jquery



//Datatable Modules
import DataTable from 'datatables.net';
import Datatable4 from 'datatables.net-bs4'

//fontawesome
import './assets/plugins/fontawesome/css/all.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import "react-datepicker/dist/react-datepicker.css";

//style
import './assets/css/style.css';
import './assets/plugins/datatables/datatables.min.css';
import './assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css';
import './assets/js/bootstrap.min.js';
// import './assets/js/script.js';



import {jQuery} from 'jquery';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

// ReactDOM.render(<AppRouter/>, document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(<AppRouter />);
const container = document.getElementById('root');
const newRoot = ReactDOM.createRoot(container); 
newRoot.render(<AppRouter />);

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}
