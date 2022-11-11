import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './componenets/Home';


ReactDOM.render(
    <Router>
        <Home />
    </Router>,
    document.getElementById('root')
);