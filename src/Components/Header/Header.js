import React from 'react';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';
import Button from '../Button/Button';
import logo from '../../Assets/Images/logo.svg';

const Header = ({ openModalFn }) => (
	<header className={styles.wrapper}>
		<img className={styles.logo} src={logo} alt="logotype"/>
		<div className={styles.container}>
			<HeaderNav />
			<Button onClick={openModalFn}>new item</Button>
		</div>
	</header>
)

export default Header;