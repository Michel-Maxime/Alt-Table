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
            return "Meal already exist with this name"
        }
        return await this.repo.addOneMeal(newMeal)
    }

    async updateMeal(name, quantity) {
        return await this.repo.updateOneMeal(name, quantity)
    }

    async deleteMealByName(name){
        if(await this.repo.mealExist(name)){
            return await this.repo.mealIsDelete(name)
        }else{
            return "Can't delete a meal wich doesn't exist"
        }
    }

}

module.exports = {
    mealService
}