import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({ image, title, description, link }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        className={image ? styles.image : styles.imageNone}
        alt={title}
      />
      <div className={styles.wrapper__info}>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        {link && <Button
          href={link}
        >
          visit saved site
        </Button>}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string,
};

ListItem.defaultProps = {
  image: 'https://image.freepik.com/free-vector/blue-things-internet-background_23-2147639040.jpg',
  link: null,
};

export default ListItem;
