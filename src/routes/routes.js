import React from 'react'
import {
  HOME_ROUTE,CATALOG_ROUTE,BASKET_ROUTE,ORDER_ROUTE,DELIVERY_ROUTE
} from '../utils/constants'
import { Orders } from '../components/orders/Orders'
import { Basket } from '../components/basket/Basket'
import { Catalog } from '../components/catalog/Catalog'
import { Delivery } from '../components/delivery/Delivery'
export const routes = [
  {
    path: '/',
    element: <Catalog />,
  }, {
    path: BASKET_ROUTE,
    element: <Basket />,
  }, {
    path: ORDER_ROUTE,
    element: <Orders />,
  }, {
    path: CATALOG_ROUTE,
    element: <Catalog />,
  }, {
    path: DELIVERY_ROUTE,
    element: <Delivery />,
  }, {
    path: '',
    element: <Catalog />,
  },
]