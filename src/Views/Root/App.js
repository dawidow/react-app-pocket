import React, { Component } from 'react';
import './App.css';
import AppContext from '../../context';
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

	addItem = e => {
		e.preventDefault();

		const newItem = {
			title: e.target[0].value,
			link: e.target[1].value,
			image: e.target[2].value,
			description: e.target[3].value
		}

		this.setState(prevState => ({
		//   [newItem.type]: [...prevState[newItem.type], newItem],
			sites: [...prevState.sites, newItem]
		}));

		this.closeModal();
	  };

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
		const contextElements = {
			...this.state,
			addItem: this.addItem
		}

		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header openModalFn={this.openModal} />
					<Switch>
						<Route exact path="/" component={AboutView} />
						<Route path="/sites" component={SitesView} />
					</Switch>
					{ isModalOpen && <Modal closeModalFn={this.closeModal} /> }
				</AppContext.Provider>
			</BrowserRouter>
		);
	}
}

export default App;