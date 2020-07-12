import * as React from 'react';

import { Grid } from './Grid';

export default { title: 'Grid' };

const data = {
  items: [
    {
      id: '1',
      timestamp: 12345,
      createdAt: '2020-05-24T14:59:12.609Z',
      description: 'awesome item 1',
    },
    {
      id: '2',
      timestamp: 12345,
      createdAt: '2020-05-24T14:59:12.609Z',
      description: 'awesome item 1',
    },
    {
      id: '3',
      timestamp: 12345,
      createdAt: '2020-05-24T14:59:12.609Z',
      description: 'awesome item 1',
    },
    {
      id: '4',
      timestamp: 12345,
      createdAt: '2020-05-24T14:59:12.609Z',
      description: 'awesome item 1',
    },
    {
      id: '5',
      timestamp: 12345,
      createdAt: '2020-05-24T14:59:12.609Z',
      description: 'awesome item 1',
    },
    {
      id: '6',
      timestamp: 12345,
      createdAt: '2020-05-24T14:59:12.609Z',
      description: 'awesome item 1',
    },
  ],
  pagination: {
    page: 0,
    pageSize: 10,
    totalEntityCount: 6,
  },
};

const config = {
  columns: [
    {
      name: 'timestamp',
      title: 'Time',
    },
    {
      name: 'description',
      title: 'Description',
    },
  ],
};

interface IType {
  id: string;
  timestamp: number;
  createdAt: string;
  description: string;
}

export const grid = () => {
  return <Grid<IType> items={data.items} pagination={data.pagination} config={config} />;
};
