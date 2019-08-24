import React, { FC } from 'react';

import { FlexBox, FlexItem } from '../css-in-js/blocks';

const Layout: FC = ({ children }) => (
  <>
    <header>
      <FlexBox width="100%">
        <FlexItem width="30%">Logo</FlexItem>
        <FlexItem width="30%">Choice</FlexItem>
        <FlexItem width="30%">Menu</FlexItem>
      </FlexBox>
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
