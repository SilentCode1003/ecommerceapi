var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shippingtax', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select
    sm_shippingmethodid as shippingmethodid,
    sm_name as name,
    sm_cost as cost

  from shipping_methods;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        shippingmethodid: key.shippingmethodid,
        name: key.name,
        cost: key.cost,
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

    let name = req.body.name;
    let cost = req.body.cost;

    let data = [];

    data.push([
      name, cost
    ])

    mysql.InsertTable('Shipping_Methods', data, (err, result) => {
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

// -------------------
// | TAX TABLE |
// -------------------

router.get('/load2', (req, res) => {
  let sql = `
  select
    tr_taxrateid as taxrateid,
    tr_name as name,
    tr_rate as rate,
    tr_location as location

  from tax_rates;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        taxrateid: key.taxrateid,
        name: key.name,
        rate: key.rate,
        location: key.location,
      })
    })
    
    res.json({
      msg: 'success',
      data: data
    })
  })
});

router.post('/save2', (req, res) => {
  try {

    let name = req.body.name;
    let rate = req.body.rate;
    let location = req.body.location;

    let data = [];

    data.push([
      name, rate, location
    ])

    mysql.InsertTable('Tax_Rates', data, (err, result) => {
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