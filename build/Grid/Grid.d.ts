import * as React from 'react';
import { IBasicType, IOwnProps } from './Grid.types';
declare const StyledGrid: <T extends IBasicType>(props: IOwnProps<T>) => React.ReactElement;
export { StyledGrid as Grid };
