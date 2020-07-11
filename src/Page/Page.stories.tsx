import * as React from 'react';

import { Page } from './Page';

export default { title: 'Page' };

export const page = () => {
  return (
    <Page header="Awesome Header">
      <p>Awesome text</p>
    </Page>
  );
};
