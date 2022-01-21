class mealService {
    constructor(repo){
        this.repo = repo
    }

    Test(){
        console.log("mealService.Test() is called")
    }

    getMeals(){
        this.repo.getAllMeals()
    }

    addMeal(newMeal){
        this.repo.addOneMeal(newMeal)
    }

}

module.exports = {
    mealService
}