let Meal = require('../repository/models/mealSchema')
let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor(){}

    getAllMeals(){
        console.log("is getAllMeals");
        Meal.find({}).then(data => console.log(data))
    }
}

module.exports = {mongoRepository}