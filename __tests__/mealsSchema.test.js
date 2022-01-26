const mongo = require('../repository/mongoConnection')
const Meal = require('../repository/models/mealSchema')

describe('Meals Schema',()=>{
    let newMeal = {
        name : "Pizza",
        description:"Pizza romaine",
        price:10,
        quantity:5
    }
    console.log(newMeal.name)
    beforeAll(async()=>{
        mongo.connection
    })

    afterAll(async () => {
        await mongo.connection.close();
    });

    test('Should correctly validate a meal',async ()=>{
        await expect(new Meal(newMeal).validate()).resolves.toBeUndefined()
    })

    test('Should throw a error if price is not a number',async ()=>{
        newMeal.price = "Not a number"
        await expect(new Meal(newMeal).validate()).rejects.toThrow()
    })

    test('Should throw a error if quantity is not a number',async ()=>{
        newMeal.quantity = "Not a number"
        await expect(new Meal(newMeal).validate()).rejects.toThrow()
    })
})