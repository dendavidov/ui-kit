import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { GridRow } from './GridRow';

interface IItemType {
  id: string;
  title: string;
}

describe('<GridRow />', () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    item: {
      id: '1',
      title: 'awesome title',
    },
    config: {
      columns: [
        {
          name: 'title',
          title: 'Title',
        },
      ],
    },
  };

  it('renders without crashing', () => {
    const tbody = document.createElement('tbody');

    expect(() =>
      render(<GridRow<IItemType> {...defaultProps} />, {
        container: document.body.appendChild(tbody),
      }),
    ).not.toThrowError();
  });
});
