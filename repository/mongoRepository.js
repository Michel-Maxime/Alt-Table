const { serviceService } = require('../metier/serviceService')
let Meal = require('../repository/models/mealSchema')
const responseHandler = require('../response/responseHandler')
const SeatingPlan = require('./models/seatingPlanSchema')
const Service = require('./models/serviceSchema')

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

        return responseHandler.postOk()
    }

    async updateOneMeal(id, quantity) {
        try {
            await Meal.findByIdAndUpdate(id, { $set: { quantity: quantity } }, { new: true, upsert: true })
        } catch (err) {
            return err.name
        }

        return responseHandler.patchOk()
    }

    async mealExist(name) {
        return await Meal.exists({ name: name })
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
 
    async getTable(numTable){
        try {
            return await SeatingPlan.find({
                tableNumero: {$e: numTable},
            })
        }catch(err) {
            return err.name
        } 
    }

    async tableIsAvailable(numTable){
        try {
            console.log(await SeatingPlan.findOne(
                {
                tableNumero: numTable,
                available: true,
                }
            ))
            return await SeatingPlan.findOne({
                tableNumero: numTable,
                available: true,
            })
        }catch(err) {
            return err.name
        } 
    }

    async getServiceAvailable(){
        try {
            return await Services.findOne({
                serviceStatus: true,
            })
        }catch(err) {
            return err.name
        } 
    }

    async addClientsToTable(bodyrequest){
        try {
            return await SeatingPlan.findOneAndUpdate({
                tableNumero: {$eq: bodyrequest.tableNumero},
                available: {$eq: true },
                maxClient : {$gt: bodyrequest.nbClients},
            },{
                nbClients: bodyrequest.nbClients,
            })
        }catch(err) {
            return err.name
        }
    }

}

module.exports = { mongoRepository }