const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')

// MongoClient.connect("mongodb://localhost:27017/todo", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });