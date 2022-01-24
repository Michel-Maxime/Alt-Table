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
        let isExist = await this.repo.mealExist(newMeal.name)
        if(isExist){
            return "pas possible, le plat existe déja"
        }
        return await this.repo.addOneMeal(newMeal)
    }

    async updateMeal(id, quantity) {
        return await this.repo.updateOneMeal(id, quantity)
    }

    async getMenu() {
        let menu = await this.repo.getMenu()
        return menu
    }

}

module.exports = {
    mealService
}