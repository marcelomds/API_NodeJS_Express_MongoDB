const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_rest_node_rocket', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;