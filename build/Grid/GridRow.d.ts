import * as React from 'react';
import { IBasicType } from './Grid.types';
import { IProps } from './GridRow.types';
declare class GridRow<T extends IBasicType> extends React.Component<IProps<T>> {
    render(): React.ReactNode;
    private deleteItem;
    private editItem;
}
export { GridRow };
