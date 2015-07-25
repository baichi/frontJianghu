var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/front');
exports.User = mongoose.model('User',require('./user'));