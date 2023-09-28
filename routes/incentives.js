var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('incentives', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select
    c_couponid as couponid,
    c_code as code,
    c_discountpercentage as discountpercentage,
    c_expirationdate as expirationdate,
    c_usagelimit as usagelimit

  from coupons;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        couponid: key.couponid,
        code: key.code,
        discountpercentage: key.discountpercentage,
        expirationdate: key.expirationdate,
        usagelimit: key.usagelimit,
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

    let code = req.body.code;
    let discountpercentage = req.body.discountpercentage;
    let expirationdate = req.body.expirationdate;
    let usagelimit = req.body.usagelimit;
    let data = [];

    data.push([
      code, discountpercentage, expirationdate, usagelimit
    ])

    mysql.InsertTable('Coupons', data, (err, result) => {
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