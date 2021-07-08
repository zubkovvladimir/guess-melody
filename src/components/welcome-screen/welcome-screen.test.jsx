import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errorCount = 3;

const onWelcomeButtonClick = () => {};

it(`Should render WelcomeScreen`, () => {
  const tree = renderer.create(
      <WelcomeScreen
        errorCount={errorCount}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
