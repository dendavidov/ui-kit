import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {};

  it('renders without crashing', () => {
    expect(() => render(<Pagination {...defaultProps} />)).not.toThrowError();
  });
});
