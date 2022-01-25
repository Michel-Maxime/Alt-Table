const { response } = require('express')
let Meal = require('../repository/models/mealSchema')
const responseHandler = require('../response/responseHandler')
const SeatingPlan = require('./models/seatingPlanSchema')
// const Service = require('../models/serviceSchema')

class mongoRepository {
    constructor() { }

    async getMenu() {
        try {
            return await Meal.find({}).where('quantity').gt(0)
        }catch(err) {
            return err.name
        }
    }

    async getAllMeals(){
        try {
            return await Meal.find({})
        }catch(err) {
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

        try{
            await meal.save();
        }catch(err) {
            return err.name
        }
        
        return responseHandler.postOk() 
    }

    async updateOneMeal(id, quantity) {
        try {  
            await Meal.findByIdAndUpdate(id, { $set: { quantity: quantity } }, { new: true, upsert: true })     
        }catch(err) {
            return err.name
        }

        return responseHandler.patchOk()
    }

    async mealExist(name){
        return await Meal.exists({name : name})
    }

    async addOneSeatingPlan(newSeatingPlan){
        const seatingPlan = new SeatingPlan({
            tableList: newSeatingPlan.tableList,
        })
        try{
            await seatingPlan.save()
            console.log(seatingPlan._id)
            await SeatingPlan.updateMany({'_id':{$ne:seatingPlan._id}},{$set:{"seatingPlanStatus":false}})
        }catch(err) {
            return err.name
        }
        
        return responseHandler.postSeatingPlanOk() 
    }
 
    async tableIsAvailable(numTable){
        try {
            const serviceOn = await SeatingPlan.find({seatingPlanStatus:true})
            const found = serviceOn[0].tableList.find(element => element.tableNumero == numTable);
            console.log(found)
            if (found===undefined){
                console.log("Je suis dedans")
                return "This table doesn't exist"
            }else{
                return found.available
            }
        }catch(err) {
            return err.name
        } 
    }

    async getServiceAvailable(){
        try {
            return true // ajouter le schéma du Service de Jordan
        }catch(err) {
            return err.name
        } 
    }

    async addClientsToTable(bodyrequest){
        try {
            const serviceOn = await SeatingPlan.find({seatingPlanStatus:true})
            const found = serviceOn[0].tableList.find(element => element == bodyrequest.tableNumero);
            found.nbClients = bodyrequest.nbClients
            found.available = false
            const up = await serviceOn[0].save()
        }catch(err) {
            return err.name
        }
        return responseHandler.postAddClientOk() 
    }

}

module.exports = { mongoRepository }