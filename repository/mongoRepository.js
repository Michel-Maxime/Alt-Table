let Meal = require('../repository/models/mealSchema')
const responseHandler = require('../response/responseHandler')

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

        return responseHandler.putOk()
    }

    async mealExist(name){
        return await Meal.exists({name : name})
    }
}

module.exports = { mongoRepository }