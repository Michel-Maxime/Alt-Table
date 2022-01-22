const { handle } = require('express/lib/application')
let Meal = require('../repository/models/mealSchema')
//let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor() { }

    async getMenu() {
        let menu = {}
        await Meal.find({}).where('quantity').gt(0).then(data => menu = data)
        return menu
    }

    async getAllMeals(){
        let meals = []
        await Meal.find({}).then(data => meals = data)
        return meals
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
            return "meal successfully added"
        }
        catch(err)
        {
            console.log('err', err.name);
            return err.name
        }
             
    }

    async updateOneMeal(id, quantity) {
        let error = null

        Meal.findByIdAndUpdate(id, { $set: { quantity: quantity } }, { new: true, upsert: true },
            function (err, docs) {
                if (err) {
                    error = err.name
                }
                else {
                    console.log("Updated User : ", docs);
                }
            }
        ) 

        if(error != null){
            return error
        }
        
        return "meal successfully updated"   
    }

    async mealExist(name){
        return await Meal.exists({name : name})
    }

    async checkExist(){
        let result = await Meal.findOne({ country: 'Croatia' }).exec();
        console.log(result);
    }
}

module.exports = { mongoRepository }