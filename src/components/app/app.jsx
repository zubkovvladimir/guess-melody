import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const welcomeButtonHandler = () => {
  return true;
};

const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount={errorCount}
    onWelcomeButtonClick={welcomeButtonHandler}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
