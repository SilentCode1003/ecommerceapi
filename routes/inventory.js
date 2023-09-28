var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('inventory', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select 
  ii_inventoryitemid as inventoryitemid,
  ii_productid as productid,
  ii_serialnumber as serialnumber,
  ii_status as status,
  ii_purchasedate as purchasedate,
  ii_purchaseprice as purchaseprice,
  ii_location as location,
  ii_notes as inventorynotes

  from Inventory_Items;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        inventoryitemid: key.inventoryitemid,
        productid: key.productid,
        serialnumber: key.serialnumber,
        status: key.status,
        purchasedate: key.purchasedate,
        purchaseprice: key.purchaseprice,
        location: key.location,
        inventorynotes: key.inventorynotes,
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

    let productid = req.body.productid;
    let serialnumber = req.body.serialnumber;
    let status = req.body.status;
    let purchasedate = req.body.purchasedate;
    let purchaseprice = req.body.purchaseprice;
    let location = req.body.location;
    let inventorynotes = req.body.inventorynotes;

    let data = [];

    data.push([
      productid, serialnumber, status, purchasedate, purchaseprice, location, inventorynotes
    ])

    mysql.InsertTable('Inventory_Items', data, (err, result) => {
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