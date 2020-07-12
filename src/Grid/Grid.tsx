import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { IGridColumn, IProps, IBasicType, IOwnProps } from './Grid.types';
import { withStyles } from './Grid.styles';
import { GridRow } from './GridRow';

class Grid<T extends IBasicType> extends React.Component<IProps<T>> {
  public render() {
    const { items, pagination, deleteItem, config, editItem, classes } = this.props;

    return (
      <div className={classes.root}>
        {config.title && (
          <div>
            <Typography variant="h4" id="tableTitle">
              {config.title}
            </Typography>
          </div>
        )}

        <Table>
          <TableHead>
            <TableRow>
              {config.columns.map((column: IGridColumn<T>) => (
                <TableCell
                  key={column.name}
                  component="th"
                  scope="row"
                  style={{ width: Boolean(column.width) ? column.width : 'auto' }}
                >
                  {column.title}
                </TableCell>
              ))}
              <TableCell component="th" scope="row" />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: T) => {
              return (
                <GridRow<T>
                  key={item.id}
                  item={item}
                  config={config}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              );
            })}
          </TableBody>
        </Table>
        {pagination && (
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
        )}
      </div>
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

const StyledGrid = withStyles(Grid) as <T extends IBasicType>(
  props: IOwnProps<T>,
) => React.ReactElement;

export { StyledGrid as Grid };
