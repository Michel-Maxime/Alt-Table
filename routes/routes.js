const {app,port} = require('../config/server')
const swaggerUi = require('swagger-ui-express');
const swaggerJSON = require("../swagger.json");

const {mongoRepository} = require('../repository/mongoRepository')
const {mealService} = require('../metier/mealService')
const {mealController} = require('../controller/mealController')

const {seatingPlanService} = require('../metier/seatingPlanService')
const {seatingPlanController} = require('../controller/seatingPlanController')

const {menuService} = require('../metier/menuService')
const {menuController} = require('../controller/menuController')

const {serviceService} = require('../metier/serviceService')
const {serviceController} = require('../controller/serviceController')

const {clientController} = require('../controller/clientController')
const {clientService} = require('../metier/clientService');
const { orderController } = require('../controller/orderController');
const { orderService } = require('../metier/orderService');


const mongorepository = new mongoRepository()
const mealservice = new mealService(mongorepository)
const mealcontroller = new mealController(mealservice)

const menuservice = new menuService(mongorepository)
const menucontroller = new menuController(menuservice)

const seatingplanservice = new seatingPlanService(mongorepository)
const seatingplancontroller = new seatingPlanController(seatingplanservice)


const serviceservice = new serviceService(mongorepository)
const servicecontroller = new serviceController(serviceservice)

const clientservice = new clientService(mongorepository)
const clientcontroller = new clientController(clientservice)

const orderservice = new orderService(mongorepository)
const ordercontroller = new orderController(orderservice)


app.get('/', (req,res) => {
    res.send("Hello world");
});

app.get('/meals',mealcontroller.getMeals);

app.delete('/meals/:name',mealcontroller.deleteMeal)

app.get('/menu', menucontroller.getMenu);

app.post('/meals', mealcontroller.postMeal);

app.patch('/meals/:name',mealcontroller.updateMeal)

app.post('/seatingplan',seatingplancontroller.postSeatingPlan)

app.post('/service', servicecontroller.postService)

app.patch('/service/:id', servicecontroller.endService)

app.post('/clients', clientcontroller.postClient)

app.post('/order', ordercontroller.takeOrder)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSON));

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
