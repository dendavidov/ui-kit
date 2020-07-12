import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import { IGridColumn, IProps, IBasicType, IOwnProps } from './Grid.types';
import { withStyles } from './Grid.styles';
import { GridRow } from './GridRow';
import { Pagination } from './Pagination';

class Grid<T extends IBasicType> extends React.Component<IProps<T>> {
  public render() {
    const { items, pagination, deleteItem, config, editItem, classes, fetchItems } = this.props;

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
        <Pagination fetchItems={fetchItems} pagination={pagination} />
      </div>
    );
  }
}

const StyledGrid = withStyles(Grid) as <T extends IBasicType>(
  props: IOwnProps<T>,
) => React.ReactElement;

export { StyledGrid as Grid };
