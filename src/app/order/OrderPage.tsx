import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import map from 'lodash/map';
import includes from 'lodash/includes';

import { Block } from '../core/css-in-js/blocks';
import { DT, DD } from '../core/css-in-js/typography';
import Spinner from '../core/components/spinner/Spinner';
import { IOrderProps } from './OrderPageContainer';
import { LeftArrow } from '../core/css-in-js/components';

interface IProps extends RouteComponentProps<{ id: string }> {}

class OrderPage extends React.Component<IOrderProps & IProps> {
  componentDidMount() {
    const { match, order, loadOrder } = this.props;

    if (!includes(match.url, String(order.orderNumber))) {
      localStorage.setItem('ORDER_ID', String(order.orderNumber));
      loadOrder(match.params.id);
    }
  }

  render() {
    const { match, order, isFetching } = this.props;
    const isSameOrder = includes(match.url, String(order.orderNumber));

    if (isFetching || !order.customer || !isSameOrder) return <Spinner />;

    return (
      <>
        <LeftArrow to="/orders" top="200px" left="100px" />
        <Block
          width="700px"
          margin="30px auto"
          borderRadius="10px"
          boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
        >
          <Block
            center
            height="25px"
            background={order.statusColor}
            borderRadius="10px 10px 0 0"
            color="#fafafa"
          >
            {order.status}
          </Block>
          <Block padding="10px">
            <dl>
              <DT>Order number:</DT>
              <DD>{order.orderNumber}</DD>
            </dl>
            <dl>
              <DT>Fullname:</DT>
              <DD>{order.customer}</DD>
            </dl>
            <dl>
              <DT>Order price:</DT>
              <DD>{order.price}$</DD>
            </dl>
            <dl>
              <DT>What's ordered:</DT>
              <DD>
                {map(order.orderList, (el) => (
                  <span key={el}>{el}</span>
                ))}
              </DD>
            </dl>
          </Block>
        </Block>
      </>
    );
  }
}

export default OrderPage;
