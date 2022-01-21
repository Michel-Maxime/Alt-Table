class mealService {
    constructor(repo) {
        this.repo = repo
    }

    Test() {
        console.log("mealService.Test() is called")
    }

    async getMeals() {
        let meals = await this.repo.getAllMeals()
        return meals
    }

    addMeal(newMeal) {
        this.repo.addOneMeal(newMeal)
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