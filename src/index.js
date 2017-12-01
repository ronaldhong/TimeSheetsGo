import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Baselayout from "./components/Baselayout"
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import About from "./components/About"
import Pricing from "./components/Pricing"


ReactDOM.render(
  <BrowserRouter>
    <Baselayout>
      <Switch>
        <Route exact path="/TimeSheetsGo/" component={Home}/>
        <Route exact path ="/TimeSheetsGo/contact" component={Contact}/>
        <Route exact path ="/TimeSheetsGo/gallery" component={Gallery}/>
        <Route exact path ="/TimeSheetsGo/about" component={About}/>
        <Route exact path ="/TimeSheetsGo/pricing" component={Pricing}/>
      </Switch>
    </Baselayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
