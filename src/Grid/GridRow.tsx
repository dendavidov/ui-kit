import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { IBasicType, IGridColumn } from './Grid.types';
import { IProps } from './GridRow.types';

class GridRow<T extends IBasicType> extends React.Component<IProps<T>> {
  public render(): React.ReactNode {
    const { config, deleteItem, editItem, item } = this.props;

    return (
      <TableRow hover={true} role="checkbox">
        {config.columns.map(
          (column: IGridColumn<T>): React.ReactNode => {
            const cellValue = column.format ? column.format(item[column.name]) : item[column.name];
            return (
              <TableCell
                key={column.name}
                component="td"
                scope="row"
                style={{ width: Boolean(column.width) ? column.width : 'auto' }}
              >
                {column.component ? (
                  <column.component value={cellValue} allValues={item} />
                ) : (
                  cellValue
                )}
              </TableCell>
            );
          },
        )}
        <TableCell
          align="right"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {!!editItem && (
            <Tooltip title="Edit">
              <IconButton aria-label="Edit" onClick={this.editItem}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          )}
          {!!deleteItem && (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete" onClick={this.deleteItem}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )}
        </TableCell>
      </TableRow>
    );
  }

  private deleteItem = () => {
    const { deleteItem, item } = this.props;

    if (!deleteItem) {
      return;
    }

    deleteItem(item.id);
  };

  private editItem = () => {
    const { editItem, item } = this.props;

    if (!editItem) {
      return;
    }

    editItem(item);
  };
}

export { GridRow };
