import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from '../AboutView/AboutView';
import SitesView from '../SitesView/SitesView';
import Header from '../../Components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={AboutView} />
				<Route path="/sites" component={SitesView} />
			</Switch>
		</>
	  </BrowserRouter>
    );
  }
}

export default App;
