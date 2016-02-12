var	helper = require('../src/helper.js')
var async = require('async')

var beecolor = module.exports = {}

beecolor.matrix = function (matrix, callback) {
	async.series([
		async.apply(helper.register),
		//Function to be executed here
		async.apply(helper.matrix, matrix)
	], function(err, results) { 
		if(typeof callback !== 'function') throw err
		callback(err)
	})
} 

 
beecolor.printPixel = function (x, y, callback) {
	async.series([
		async.apply(helper.register),
		async.apply(printPixel(x,y))
	], function(err, results) { 
		if(typeof callback !== 'function') throw err
		callback(err) 
	})
}

beecolor.clear = function (callback) {
	helper.clear(function(err) {
		if(typeof callback !== 'function') throw err
		callback(err)
	})
}
 
 