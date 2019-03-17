import React from 'react';
import styles from './HeaderNav.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => (
	<nav>
		<ul className={styles.wrapper}>
			<li className={styles.item}>
				<NavLink exact
					activeClassName={styles.navItemLinkActive}
					className={styles.navItemLink}
					to="/">about</NavLink>
			</li>
			<li className={styles.item}>
				<NavLink
					activeClassName={styles.navItemLinkActive}
					className={styles.navItemLink}
					to="/sites">sites</NavLink>
			</li>
		</ul>
	</nav>
)

export default HeaderNav;