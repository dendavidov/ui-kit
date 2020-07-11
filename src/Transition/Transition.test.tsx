import { cleanup, render } from '@testing-library/react';
import * as React from 'react';

import { Transition } from './Transition';

describe('<Transition />', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    expect(() => render(<Transition />)).not.toThrowError();
  });

  it('renders Slide component', () => {
    const { container } = render(<Transition />);

    const slideComponent = container.querySelector('.mock-Slide');
    expect(slideComponent).not.toBeNull();
  });
});
