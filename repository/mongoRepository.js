let Meal = require('../repository/models/mealSchema')
let serialize = require('../repository/serializer/serializer')

class mongoRepository {
    constructor(){}

    getAllMeals(){
        console.log("is getAllMeals");
        Meal.find({}).then(data => console.log(data))
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
                })}}

module.exports = {mongoRepository}