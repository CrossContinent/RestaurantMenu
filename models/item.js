var orm = require('../config/orm.js');

var item = {
	all: function(cb) {
		orm.all('items', function(res){
			cb(res);
		});
	},
	// check function arguments
	create: function(cols, vals, cb) {
		orm.create('items', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.update('items', objColVals, condition, function(res){
			cb(res);
		});
	},
	delete: function(condition, cb) {
		orm.delete('items', condition, function(res){
			cb(res);
		});
	}
};

module.exports = item;
