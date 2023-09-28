var express = require('express');
var router = express.Router();

const mysql = require('./repository/eccomercedb')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('content', { title: 'Express' });
});

module.exports = router;

router.get('/load', (req, res) => {
  let sql = `
  select
    p_pageid as pageid,
    p_title as pagetitle,
    p_content as pagecontent,
    p_numclick as numclick,
    p_datepost as datepost

  from pages;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        pageid: key.pageid,
        pagetitle: key.pagetitle,
        pagecontent: key.pagecontent,
        numclick: key.numclick,
        datepost: key.datepost,

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

    let pagetitle = req.body.pagetitle;
    let pagecontent = req.body.pagecontent;
    let numclick = req.body.numclick;
    let datepost = req.body.datepost;

    let data = [];

    data.push([
      pagetitle, pagecontent, numclick, datepost
    ])

    mysql.InsertTable('Pages', data, (err, result) => {
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
// | BLOG POST TABLE |
// -------------------

router.get('/load2', (req, res) => {
  let sql = `
  select
    bp_blogpostid as blogpostid,
    bp_title as blogetitle,
    bp_content as blogcontent,
    bp_publishdate as publishdate

  from blog_posts;`;
  let data = [];

  mysql.SelectResult(sql, (err, result) => {
    if (err) console.error("Error: ", err);

    result.forEach((key, item) => {
      data.push({
        blogpostid: key.blogpostid,
        blogetitle: key.blogetitle,
        blogcontent: key.blogcontent,
        publishdate: key.publishdate,
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

    let blogetitle = req.body.blogetitle;
    let blogcontent = req.body.blogcontent;
    let publishdate = req.body.publishdate;

    let data = [];

    data.push([
      blogetitle, blogcontent, publishdate
    ])

    mysql.InsertTable('Blog_Posts', data, (err, result) => {
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