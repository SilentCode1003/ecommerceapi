var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('product', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select 
  p_productid as productid,
  p_image as image,
  p_name as productname,
  c_name as categoryname,
  p_categoryid as categoryid,
  p_price as price,
  p_quantity as quantity,
  p_createdat as insertdate,
  p_updatedat as updtdate

  from Products
  inner join Categories on p_categoryid = c_categoryid;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        productid: key.productid,
        image: key.image,
        productname: key.productname,
        categoryname: key.categoryname,
        categoryid: key.categoryid,
        price: key.price,
        quantity: key.quantity,
        insertdate: key.insertdate,
        updtdate: key.updtdate,
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
    // This one should be the same base on the first variable on ajax post in example {indexscript.ejs}
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let categoryid = req.body.categoryid;
    let description = req.body.description;
    let image = req.body.image;
    let createdat = req.body.createdat;
    let updatedat = req.body.updatedat;
    let data = [];

    // This should be same on sequence on your InsertTable Bellow
    data.push([
      name, description, categoryid, price, quantity, createdat, updatedat, image
    ])
    // This is where you call your Insert Into in the database table
    mysql.InsertTable('Products', data, (err, result) => {
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
// router.get('/getproductdetails', (req, res) => {
//   let sql = `
//   select 
//   p_name as productname,
//   p_quantity as quantity

//   from Products;`;
//   let data = [];

//   mysql.SelectResult(sql, (err, result) => {
//     if (err) console.error("Error: ", err);

//     result.forEach((key, item) => {
//       data.push({
//         productname: key.productname,
//         quantity: key.quantity,
//       })
//     })

//     res.json({
//       msg: 'success',
//       data: data
//     })
//   })
// });