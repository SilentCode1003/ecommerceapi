var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('order', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select 
  o_orderid as orderid,
  o_customerid as customerid,
  o_status as orderstatus,
  o_orderdate as orderdate,
  o_totalamount as totalamount

  from orders`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        orderid: key.orderid,
        customerid: key.customerid,
        orderstatus: key.orderstatus,
        orderdate: key.orderdate,
        totalamount: key.totalamount,
      })
    })
    
    res.json({
      msg: 'success',
      data: data
    })
  })
});

router.post('/save', (req, res) => {
  try {
    let customerid = req.body.customerid;
    let status = req.body.status;
    let orderdate = req.body.orderdate;
    let totalamount = req.body.totalamount;

    let data = [];

    data.push([
      customerid, status, orderdate, totalamount
    ])

    mysql.InsertTable('Orders', data, (err, result) => {
      if (err) console.error("Error: ", err);

      console.log(result);

      res.json({
        msg: 'success',
      });
    })

  } catch (error) {
    res.json({
      msg: 'error',
    });
  }

});