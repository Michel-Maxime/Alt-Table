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















