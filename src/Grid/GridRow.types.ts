import { IBasicType, IGridConfig } from './Grid.types';

interface IProps<T extends IBasicType> {
  item: T;
  config: IGridConfig<T>;
  fetchItems?(page: number, pageSize: number): void;
  deleteItem?(id: string): void;
  editItem?(item: T): void;
}

export { IProps };
