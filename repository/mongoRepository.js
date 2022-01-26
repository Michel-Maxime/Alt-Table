let Meal = require('../repository/models/mealSchema')
const responseHandler = require('../response/responseHandler')
const SeatingPlan = require('./models/seatingPlanSchema')
const Service = require('./models/serviceSchema')

const Order = require('./models/orderShema')


class mongoRepository {
    constructor() { }

    async getMenu() {
        try {
            return await Meal.find({}).where('quantity').gt(0)
        } catch (err) {
            return err.name
        }
    }

    async getAllMeals() {
        try {
            return await Meal.find({})
        } catch (err) {
            return err.name
        }
    }

    async addOneMeal(newMeal) {
        const meal = new Meal({
            name: newMeal.name,
            description: newMeal.description,
            type: newMeal.type,
            price: newMeal.price
        })

        try {
            await meal.save();
        } catch (err) {
            return err.name
        }

        return responseHandler.postMealOk()
    }

    async updateOneMeal(name, quantity) {
        try {
            await Meal.updateOne({name:name},{ quantity: quantity })
        } catch (err) {
            return err.name
        }

        return responseHandler.patchMealOk()
    }

    async mealExist(name) {
        try{
            return await Meal.exists({ name: name })
        }catch(err){
            return err.name
        }
    }

    async mealIsDelete(name) {
        try{
            await Meal.findOneAndDelete({ name: name })
        }catch(err){
            return err.name
        }
        return responseHandler.deleteMealOk()
    }

    async addOneSeatingPlan(newSeatingPlan) {
        const seatingPlan = new SeatingPlan({
            tableList: newSeatingPlan.tableList,
        })
        try {
            await seatingPlan.save()
            console.log(seatingPlan._id)
            await SeatingPlan.updateMany({ '_id': { $ne: seatingPlan._id } }, { $set: { "seatingPlanStatus": false } })
        } catch (err) {
            return err.name
        }

        return responseHandler.postSeatingPlanOk()
    }

    async addOneService() {
        try {
            const seatingPlanId = await SeatingPlan.find({}, '_id').where('seatingPlanStatus').equals(true)
            const service = new Service({
                seatingPlanSchemaId: seatingPlanId[0]._id
            })
            await service.save();
            await Service.updateMany({ '_id': { $ne: service._id } }, { $set: { "serviceStatus": false } })
        } catch (err) {
            return err.name
        }
        return responseHandler.postServiceOk()
    }

    async serviceExist() {
        try {
            const serviceStatus = await Service.find({}).where('serviceStatus').equals(true)
            if (Array.isArray(serviceStatus) && serviceStatus.length) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return err.name
        }

    }

    async endService() {
        try {
            await Meal.findByIdAndUpdate(id, { $set: { serviceStatus: false } }, { new: true, upsert: true })
        } catch (err) {
            return err.name
        }
    }
 
    async tableIsAvailable(numTable){
        try {
            const serviceOn = await SeatingPlan.find({seatingPlanStatus:true})
            const found = serviceOn[0].tableList.find(element => element.tableNumero == numTable);
            if (found===undefined){
                return found
            }else{
                return found.available
            }
        }catch(err) {
            return err
        } 
    }

    async addClientsToTable(bodyrequest){
        try {
            const serviceOn = await SeatingPlan.find({seatingPlanStatus:true})
            const found = serviceOn[0].tableList.find(element => element.tableNumero == bodyrequest.tableNumero);
            found.nbClients = bodyrequest.nbClients
            found.available = false
        await serviceOn[0].save()
        }catch(err) {
            return err.name
        }
        return responseHandler.postAddClientOk() 
    }

    async getTableAvaible(number){
        try{
            const serviceOn = await SeatingPlan.findOne({seatingPlanStatus:true})
            const table = serviceOn.tableList.find(tbl => tbl.tableNumero == number);
            return table ? true : false; 
        }catch(err){
            console.log(err.name);
            return false
        }
    }

    async addOrder(order){
        try{
            const newOrder = new Order({
                order: order
            })
            await newOrder.save()
            return responseHandler.postOrderOK()         
        }catch(err){
            return err.name
        }
    }

}

module.exports = { mongoRepository }