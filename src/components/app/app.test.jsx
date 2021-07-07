import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorCount = 3;

it('Should render App', () => {
  const tree = renderer.create(
    <App
      errorCount={errorCount}
    />
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
