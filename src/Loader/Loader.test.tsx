import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { Loader } from './Loader';

describe('<Loader />', () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {};

  it('renders without crashing', () => {
    expect(() => render(<Loader {...defaultProps} />)).not.toThrowError();
  });
});
