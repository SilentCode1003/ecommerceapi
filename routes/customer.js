var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('customer', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select
  c_customerid as customerid,
  c_firstname as firstname,
  c_lastname as lastname,
  c_email as email,
  c_phone as phone,
  c_address as address
  from Customers;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        customerid: key.customerid,
        firstname: key.firstname,
        lastname: key.lastname,
        email: key.email,
        phone: key.phone,
        address: key.address,
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

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let data = [];

    data.push([
      firstname, lastname, email, phone, address
    ])

    mysql.InsertTable('Customers', data, (err, result) => {
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