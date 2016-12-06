var express = require('express');
var router = express.Router();
var item = require('../models/item.js');

router.get('/', function(req,res) {
	res.redirect('/index');
});

router.get('/index', function(req,res) {
	item.all(function(data){
		var hbsObject = {items : data};
		res.render('index', hbsObject);
	});
});

router.get('/admin', function(req,res) {
	item.all(function(data){
		var hbsObject = {items : data};
		res.render('admin', hbsObject);
	});
});

router.post('/admin/create', function(req,res) {
	item.create(['name, description, price'], [req.body.name, req.body.description, req.body.price], function(data) {
		res.redirect('/admin');
	});
});

router.put('/admin/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	var setCol = 'soldout = ' + req.body.soldout;
	item.update(setCol, condition, function(data) {
		res.redirect('/admin');
	});
});

router.delete('/admin/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	item.delete(condition, function(data) {
		res.redirect('/admin');
	});
});


module.exports = router;
