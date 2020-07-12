import * as React from 'react';
import { WithStyles } from '@material-ui/core';

type Maybe<T> = undefined | null | T;

interface IColumnComponentProps<T> {
  value: unknown;
  allValues: T;
}

interface IGridColumn<T extends IBasicType> {
  name: string;
  title: string;
  component?: React.ComponentType<IColumnComponentProps<T>>;
  format?: (value: Maybe<string | number>) => string;
  width?: string | number;
}

interface IGridConfig<T extends IBasicType> {
  columns: IGridColumn<T>[];
  title?: React.ReactNode;
}

interface IBasicType {
  id: string;
}

interface IPagination {
  page: number;
  pageSize: number;
  totalEntityCount: number;
}

interface IOwnProps<T extends IBasicType> {
  items: T[];
  pagination?: IPagination;
  config: IGridConfig<T>;
  fetchItems?(page: number, pageSize: number): void;
  deleteItem?(id: string): void;
  editItem?(item: T): void;
}

type IProps<T extends IBasicType> = IOwnProps<T> & WithStyles;

export { IGridColumn, IGridConfig, IProps, IOwnProps, IBasicType };
