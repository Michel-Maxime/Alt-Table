let Meal = require('../repository/models/mealSchema')
let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor(){}

    async getAllMeals(){
        let meals = {}
        await Meal.find({}).then(data => meals = data)
        return meals
    }
}

module.exports = {mongoRepository}