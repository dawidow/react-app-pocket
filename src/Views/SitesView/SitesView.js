import React from 'react';
import AppContext from '../../context';
import List from '../../Components/List/List';
// import styles from './SitesView.module.scss';

const SitesView = () => (
	<AppContext.Consumer>
		{(context) => (
		<List items={context.sites} />
		)}
	</AppContext.Consumer>
)

export default SitesView;