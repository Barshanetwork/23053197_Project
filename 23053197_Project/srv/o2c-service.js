const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

  this.on('confirmOrder', async (req) => {
    const id = req.params[0].ID;
    await UPDATE('o2c.SalesOrders').set({ status: 'Confirmed' }).where({ ID: id });
    return SELECT.one.from('o2c.SalesOrders').where({ ID: id });
  });

  this.on('cancelOrder', async (req) => {
    const id = req.params[0].ID;
    await UPDATE('o2c.SalesOrders').set({ status: 'Cancelled' }).where({ ID: id });
    return SELECT.one.from('o2c.SalesOrders').where({ ID: id });
  });

});