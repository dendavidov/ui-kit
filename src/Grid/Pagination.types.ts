interface IPagination {
  page: number;
  pageSize: number;
  totalEntityCount: number;
}

interface IProps {
  pagination?: IPagination;
  fetchItems?(page: number, pageSize: number): void;
}

export { IProps, IPagination };
