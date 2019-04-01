import React from 'react';
import styles from './AboutView.module.scss';
import Image1 from '../../Assets/Images/undraw_bookmarks_r6up.svg';
import Image2 from '../../Assets/Images/undraw_confirmed_81ex.svg';
import Image3 from '../../Assets/Images/undraw_post_online_dkuk.svg';

const AboutView = () => (
	<>
		<div className={styles.wrapper}>
			<img className={styles.image} src={Image1} alt={Image1} />
			<div className={styles.container}>
				<h2>Welcome to your pocket for websites.</h2>
				<p>Did you find an interesting site? Are you afraid of forgetting her? You better save it quickly in your pocket! Add links to interesting websites using the <span className={styles.strongText}>new item</span> button.</p>
			</div>
		</div>

		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2>Add pages from any device.</h2>
				<p>Do not worry about which device you are currently using. Our pocket is fully responsive, so use what you want and when you want.</p>
			</div>
			<img className={styles.image} src={Image2} alt={Image1} />
		</div>

		<div className={styles.wrapper}>
			<img className={styles.image} src={Image3} alt={Image1} />
			<div className={styles.container}>
				<h2>See how simple it is.</h2>
				<p>Just click the <span className={styles.strongText}>new item</span> button, enter the title, link to the page, photo (optional) and description. Nothing more. You can now collect interesting links in our application.</p>
			</div>
		</div>
	</>
)

export default AboutView;