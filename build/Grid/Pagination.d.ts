import * as React from 'react';
import { IProps } from './Pagination.types';
declare class Pagination extends React.Component<IProps> {
    render(): JSX.Element | null;
    private handleChangePage;
    private handleChangeRowsPerPage;
}
export { Pagination };
