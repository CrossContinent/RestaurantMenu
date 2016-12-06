var express = require('express');
var router = express.Router();
var item = require('../models/item.js');

router.get('/', function(req,res) {
	res.redirect('/items');
});

router.get('/items', function(req,res) {
	item.all(function(data){
		var hbsObject = {items : data};
		res.render('index', hbsObject);
	});
});

router.post('/items/create', function(req,res) {
	item.create(['name, description, price'], [req.body.name, req.body.description, req.body.price], function(data) {
		res.redirect('/items');
	});
});

router.put('/items/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
	var setCol = 'soldout = ' + req.body.soldout;
	item.update(setCol, condition, function(data) {
		res.redirect('/items');
	});
});

router.delete('/items/delete/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	item.delete(condition, function(data) {
		res.redirect('/items');
	});
});


module.exports = router;
