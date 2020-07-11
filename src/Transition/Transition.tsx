import * as React from 'react';

import Slide, { SlideProps } from '@material-ui/core/Slide';

class Transition extends React.Component<SlideProps> {
  public render() {
    return <Slide direction="up" {...this.props} />;
  }
}

export { Transition };
