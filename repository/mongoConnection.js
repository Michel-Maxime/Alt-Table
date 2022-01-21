let mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0.jeriw.mongodb.net/alttable'

// MongoDB
mongoose.connect(url,{
  useNewUrlParser : true,
  useUnifiedTopology: true
})


mongoose.connection.once('open', function () {
    console.log('Connection has been made');
  }).on('error', function (error) {
    console.log('Connect error', error);
  }).on('disconnected', function () {
    console.log('Connection disconnected');
  })

module.exports = mongoose