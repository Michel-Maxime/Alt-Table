let Meal = require('../repository/models/mealSchema')
//let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor(){}

    async getAllMeals(){
        let meals = {}
        await Meal.find({}).then(data => meals = data)
        return meals
    }

    addOneMeal(newMeal){
        const meal = new Meal({
            name: newMeal.name,
            description: newMeal.description,
            type: newMeal.type,
            price: newMeal.price,
            quantity: newMeal.quantity,
        })

        meal.save()     
    }
}

module.exports = {mongoRepository}