import React, { FC } from 'react';

import { FlexBox, FlexItem } from '../css-in-js/blocks';
import { Logo } from '../css-in-js/typography';
import Dropdown from '../components/dropdown/DropdownContainer';
import { IItem } from '../components/dropdown/Dropdown';
import { ChoisenLink } from '../css-in-js/order';

interface IProps {
  orderId: number;
}

const Layout: FC<IProps> = ({ children, orderId }) => {
  const profileMenu: IItem[] = [
    {
      active: true,
      title: 'Show Profile',
      url: '/profile',
    },
    {
      active: false,
      title: 'Logout',
      url: '/logout',
    },
  ];

  return (
    <>
      <header>
        <FlexBox width="100%" height="60px" background="lightgrey">
          <FlexItem width="40%">
            <FlexItem center>
              <Logo>Order It</Logo>
            </FlexItem>
          </FlexItem>
          <FlexBox
            justifycontent="center"
            alignitems="center"
            width="40%"
            height="60px"
            aligncontent="center"
          >
            {orderId ? (
              <ChoisenLink to={`/orders/${orderId}`}>Previous order - {orderId}</ChoisenLink>
            ) : (
              'Not Choise'
            )}
          </FlexBox>
          <FlexItem width="20%">
            <Dropdown items={profileMenu} />
          </FlexItem>
        </FlexBox>
      </header>
      <main style={{ padding: 10 }}>{children}</main>
    </>
  );
};

export default Layout;
