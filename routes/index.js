
/*
 * GET home page.
 */
var fs = require('fs');

exports.index = function(req, res){
  var bikes = [];
  fs.readdir('./public/images/bikes', function(err, files) {
    res.render('index', { title: 'BikeFantastic', bikes: files });
  });
};