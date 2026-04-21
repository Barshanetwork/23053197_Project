namespace o2c;

entity Customers {
  key ID : String(10);
  name   : String(100);
  email  : String(100);
  city   : String(50);
}

entity SalesOrders {
  key ID        : String(10);
  customer      : Association to Customers;
  orderDate     : Date;
  status        : String(20);
  totalAmount   : Decimal(10,2);
}