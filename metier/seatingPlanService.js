class seatingPlanService{
    constructor(repo){
        this.repo = repo
    }

    async addSeatingPlan(newSeatingPlan){
        return await this.repo.addOneSeatingPlan(newSeatingPlan)
    }
}

module.exports = {
    seatingPlanService
}