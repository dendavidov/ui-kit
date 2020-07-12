import * as React from 'react';

import { cleanup, render } from '@testing-library/react';

import { Grid } from './Grid';

interface IItemType {
  id: string;
  title: string;
}

describe('<Grid />', () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    items: [
      {
        id: '1',
        title: 'awesome title',
      },
    ],
    pagination: {
      page: 0,
      pageSize: 10,
      totalEntityCount: 1,
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
    expect(() => render(<Grid<IItemType> {...defaultProps} />)).not.toThrowError();
  });
});
