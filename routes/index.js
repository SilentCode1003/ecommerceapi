var express = require('express');
var router = express.Router();
const { MasterItemModel } = require('./model/modelclass')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;


router.get('/data', (req, res) => {
  try {

    let data = [];

    data.push({
      itemecode: '1',
      brand: '2',
      description: '3',
      status: '4',
      createdby: '5',
      createddate: '6'
    })

    let itemList = data.map((item) => new MasterItemModel(item['itemecode'], item['brand'], item['description', item['status'], item['createdby'], item['createddate']]));

    let result = [];
    itemList.forEach((item) => {
      result.push({
        itemcode: item.itemcode,
      })
      console.log(`${item.itemcode}`);
    })

    res.json({
      msg: 'success',
      data: result
    })

  } catch (error) {
    res.json({
      msg: error
    })
  }
})

router.post('/getdata', (req, res) => {
  try {
    let id = req.body.branchid;

    console.log(id);

    res.json({
      msg: 'success'
    })

  } catch (error) {
    res.json({
      msg: error
    })
  }
})