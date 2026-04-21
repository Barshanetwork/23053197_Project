using o2c from '../db/schema';

service O2CService @(path:'/api') {

  entity Customers as projection on o2c.Customers;

  entity SalesOrders as projection on o2c.SalesOrders
  actions {
    action confirmOrder() returns SalesOrders;
    action cancelOrder() returns SalesOrders;
  };

}