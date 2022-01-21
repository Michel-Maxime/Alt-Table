const {app,port} = require('../config/server')

//const mongoose = require('../repository/mongoConnection') lance bien la connexion

const {mongoRepository} = require('../repository/mongoRepository')
const {mealService} = require('../metier/mealService')

const mongorepository = new mongoRepository()

const mealservice = new mealService(mongorepository)//mettre un repo

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/test', (req, res) => {
    res.send(mealservice.Test())
});

app.get('/meals', (req, res) => {
    mealservice.getMeals()
    res.send("ok");
});

app.listen(port, () => {
    console.log('Running on http://localhost:' + port);
});






















// //Mongo works
// const mongoClient = require('mongodb').MongoClient

// const url = 'mongodb+srv://admin:admin@cluster0.jeriw.mongodb.net'
// const dbName = 'alttable'


// mongoClient.connect(url, function(err, client) {
//         if (err) throw err;
    
//         console.log("Connected successfully to server");
//         var db = client.db(dbName);
    
//         db.collection('collectionTest').find().toArray(function (err, result) {
//         if (err) throw err
    
//         console.log(result)
//         client.close();
//         });
//       });


// //Mongoose
// const { ObjectId, Double, Int32 } = require('mongodb')

// let serialize = require('../repository/serializer/serializer')
// let mongoose = require('mongoose');
// const _url = 'mongodb+srv://admin:admin@cluster0.jeriw.mongodb.net/alttable'

// //alttable?retryWrites=true&w=majority

// // MongoDB
// mongoose.connect(_url,{
//   useNewUrlParser : true,
//   //useUnifiedTopology: true
// })


// mongoose.connection.once('open', function () {
//     console.log('Connection has been made');
//   }).on('error', function (error) {
//     console.log('Connect error', error);
//   }).on('disconnected', function () {
//     console.log('Connection disconnected');
//   })


// const MealSchema = mongoose.Schema({
//     _id: ObjectId,
//     name: String,
//     description: String,
//     type: String,
//     price: Number,
//     quantity: Number
// })

// let Meal = mongoose.model('meals', MealSchema)

// Meal.find({}).then(data => console.log(data))
