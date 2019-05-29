const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
   res.render('main')
});

router.get('/admin', function (req, res) {
   res.render('index')
});

router.post('/admin', function (req, res) {
   console.log(res.body);
   if (req.body.name === 'admin' && req.body.pwd === 'nordine123') {
       res.redirect('/')
   }
});

module.exports = router;