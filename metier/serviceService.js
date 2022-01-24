class serviceService {
    constructor(repo) {
        this.repo = repo
    }

    async addService(newService) {
        return await this.repo.addOneService(newService)
    }
}

module.exports = {
    serviceService
}