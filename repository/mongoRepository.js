let Meal = require('../repository/models/mealSchema')
//let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor() { }


    getMenu() {
        console.log("isMenu")
        Meal.find({}).where('quantity').gt(0).then(data => console.log(data))
    }


    async getAllMeals(){
        let meals = []
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

    updateOneMeal(id,quantity){
        Meal.findByIdAndUpdate(id, {$set:{quantity : quantity}}, {new: true,upsert: true},
            function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated User : ", docs);
                }
            }
        )        
    }

    async mealExist(name){
        return await Meal.exists({name : name})
    }
}

module.exports = { mongoRepository }