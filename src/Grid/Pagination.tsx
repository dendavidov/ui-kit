import TablePagination from '@material-ui/core/TablePagination';
import * as React from 'react';

import { IProps } from './Pagination.types';

class Pagination extends React.Component<IProps> {
  public render() {
    const { pagination } = this.props;

    if (!pagination) {
      return null;
    }

    return (
      <TablePagination
        component="div"
        count={pagination.totalEntityCount}
        rowsPerPage={pagination.pageSize}
        page={pagination.page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }

  private handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    const { pagination, fetchItems } = this.props;

    if (!fetchItems || !pagination) {
      return;
    }

    fetchItems(newPage, pagination.pageSize);
  };

  private handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { fetchItems } = this.props;

    if (!fetchItems) {
      return;
    }

    fetchItems(0, +event.target.value);
  };
}

export { Pagination };
