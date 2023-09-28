var express = require('express');
var router = express.Router();
const { MasterItemModel } = require('./model/modelclass')

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;


router.get('/load', (req, res) => {
  let sql = `
  select 
  p_name as productname,
  p_price as price,
  p_quantity as quantity

  from Products;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        productname: key.productname,
        price: key.price,
        quantity: key.quantity,
      })
    })

    res.json({
      msg: 'success',
      data: data
    })
  })
});