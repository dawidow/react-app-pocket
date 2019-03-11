import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from '../AboutView/AboutView';
import SitesView from '../SitesView/SitesView';
import Header from '../../Components/Header/Header';
import Modal from '../../Components/Modal/Modal';

class App extends Component {
	state = {
		sites: [],
		isModalOpen: false,
	}

	openModal = () => {
		this.setState({
		  isModalOpen: true,
		})
	  }

	  closeModal = () => {
		this.setState({
		  isModalOpen: false,
		})
	  }

	render() {
		const { isModalOpen } = this.state;

		return (
		<BrowserRouter>
			<>
				<Header openModalFn={this.openModal} />
				<Switch>
					<Route exact path="/" component={AboutView} />
					<Route path="/sites" component={SitesView} />
				</Switch>
				{ isModalOpen && <Modal closeModalFn={this.closeModal} /> }
			</>
		</BrowserRouter>
		);
	}
}

export default App;
