const { exists } = require("../repository/models/mealSchema")

class mealService {
    constructor(repo) {
        this.repo = repo
    }

    async getMeals() {
        let meals = await this.repo.getAllMeals()
        return meals
    }

    async addMeal(newMeal){
        // let isExist = 
        // if(isExist){
        //     return "pas possible, le plat existe déja"
        // }else{
        //     return await this.repo.addOneMeal(newMeal)
        // }
        if(await this.repo.mealExist(newMeal.name)){
            return "pas possible, le plat existe déja"
        }
        return await this.repo.addOneMeal(newMeal)
    }

    updateMeal(id, quantity) {
        this.repo.updateOneMeal(id, quantity)
    }

    async getMenu() {
        let menu = await this.repo.getMenu()
        return menu
    }

}

module.exports = {
    mealService
}