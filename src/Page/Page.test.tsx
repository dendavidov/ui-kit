import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { Page } from './Page';

describe('<Page />', () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    header: 'Awesome Header',
  };

  it('renders without crashing', () => {
    expect(() => render(<Page {...defaultProps}>Awesome Content</Page>)).not.toThrowError();
  });
});
