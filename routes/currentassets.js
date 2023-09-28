var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('currentassets', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select
    sr_reportid as reportid,
    sr_reportdate as reportdate,
    sr_salestotal as salestotal,
    sr_revenuetotal as revenuetotal

  from sales_reports;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        reportid: key.reportid,
        reportdate: key.reportdate,
        salestotal: key.salestotal,
        revenuetotal: key.revenuetotal,
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

    let reportdate = req.body.reportdate;
    let salestotal = req.body.salestotal;
    let revenuetotal = req.body.revenuetotal;
    let data = [];

    data.push([
      reportdate, salestotal,revenuetotal
    ])

    mysql.InsertTable('Sales_Reports', data, (err, result) => {
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


// THIS ROUTE GIVE WAY TO ACCESS THE DATABASE AND PROMT THE DATA TO THE CHART
router.get('/getchartdata', (req, res) => {
  let sql = `
  select
    sr_reportdate as reportdate,
    sr_salestotal as salestotal

  from sales_reports;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        reportdate: key.reportdate,
        salestotal: key.salestotal,
      })
    })

    res.json({
      msg: 'success',
      data: data
    })
  })
});