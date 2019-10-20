import React from 'react';
import map from 'lodash/map';

import Spinner from '../core/components/spinner/Spinner';
import { LeftArrow } from '../core/css-in-js/components';
import { DT, DD } from '../core/css-in-js/typography';
import { FlexBox, Block } from '../core/css-in-js/blocks';
import OrderCard from '../orders/OrderCard';
import { ProfileProps } from './ProfilePageContainer';

export class ProfilePage extends React.Component<ProfileProps> {
  componentDidMount() {
    const { getProfile } = this.props;

    getProfile();
  }

  render() {
    const { profile } = this.props;

    if (!profile) return <Spinner />;

    return (
      <>
        <LeftArrow to="/orders" top="200px" left="100px" />
        <Block
          width="1000px"
          margin="30px auto"
          borderRadius="10px"
          boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
        >
          <Block padding="10px">
            <dl>
              <DT>First Name:</DT>
              <DD>{profile.firstname}</DD>
            </dl>
            <dl>
              <DT>FirstLame:</DT>
              <DD>{profile.lastname}</DD>
            </dl>
            <dl>
              <DT>Balance:</DT>
              <DD>{profile.balance} $</DD>
            </dl>
            <dl>
              <DT>What's ordered:</DT>
              <DD>
                <FlexBox>
                  {map(profile.orders, (order) => (
                    <OrderCard key={order.orderNumber} order={order} />
                  ))}
                </FlexBox>
              </DD>
            </dl>
          </Block>
        </Block>
      </>
    );
  }
}
