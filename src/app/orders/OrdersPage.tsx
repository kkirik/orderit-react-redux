import React, { FC, useEffect } from 'react';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import { FlexBox, FlexItem, Block } from '../core/css-in-js/blocks';
import OrderCard from './OrderCard';
import Spinner from '../core/components/spinner/Spinner';
import { OrderPageProps } from './OrdersPageContainer';
import { Search } from '../core/components/search/Search';
import { H1 } from '../core/css-in-js/typography';

const OrdersPage: FC<OrderPageProps> = ({ orders, setOrders, isFetching, loadOrders }) => {
  useEffect(() => {
    const searchString = localStorage.getItem('SEARCH');

    loadOrders({ search: searchString });

    return () => {
      setOrders([]);
    };
  }, []);

  function handleSearch(search: string) {
    loadOrders({ search });
  }

  function renderOrders() {
    if (isFetching) return <Spinner />;
    if (isEmpty(orders))
      return (
        <Block center>
          <H1>Not Fount</H1>
        </Block>
      );

    return (
      <FlexBox justifycontent="flex-start" margin="20px 0 0 0">
        {map(orders, (order) => (
          <FlexItem key={order.orderNumber} width="24.5%" margin="0 0 20px 0">
            <OrderCard order={order} />
          </FlexItem>
        ))}
      </FlexBox>
    );
  }

  return (
    <>
      <Search onChange={handleSearch} force />
      {renderOrders()}
    </>
  );
};

export default OrdersPage;
