let Meal = require('../repository/models/mealSchema')
//let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor(){}

    async getAllMeals(){
        Meal.find({}).then(data => console.log(data))
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