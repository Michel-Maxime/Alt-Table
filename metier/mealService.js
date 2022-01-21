class mealService {
    constructor(repo){
        this.repo = repo
    }

    Test(){
        console.log("mealService.Test() is called")
    }

    async getMeals(){
        let meals = await this.repo.getAllMeals()
        return meals
    }

}

module.exports = {
    mealService
}