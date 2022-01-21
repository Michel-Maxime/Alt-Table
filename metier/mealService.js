const { exists } = require("../repository/models/mealSchema")

class mealService {
    constructor(repo) {
        this.repo = repo
    }

    Test() {
        console.log("mealService.Test() is called")
    }

    async getMeals(){
        let meals = await this.repo.getAllMeals()
        return meals
    }

    async addMeal(newMeal){
        let isExist = await this.repo.mealExist(newMeal.name)
        console.log(isExist);
        if(isExist){
            console.log("pas possible, le plat existe déja")
        }else{
            this.repo.addOneMeal(newMeal)
        }
    }

    updateMeal(id,quantity){
        this.repo.updateOneMeal(id,quantity)
    }

    getMenu() {
        this.repo.getMenu()
    }

}

module.exports = {
    mealService
}