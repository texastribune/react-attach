import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../scss/app.scss';

const App = ({ description }) => (
  <div className={styles.container}>
    <h1 className={styles.container__header}>React Attach</h1>
    <h2>{description}</h2>
  </div>
);

App.propTypes = {
  description: PropTypes.string.isRequired,
};

export default App;
