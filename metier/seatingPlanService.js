class seatingPlanService {
    constructor(repo) {
        this.repo = repo
    }

    async addSeatingPlan(newSeatingPlan) {
        let checkForService = await this.repo.serviceExist()
        if (checkForService == true) {
            return "There is already a service running"
        } else {
            return await this.repo.addOneSeatingPlan(newSeatingPlan)
        }
    }
}

module.exports = {
    seatingPlanService
}