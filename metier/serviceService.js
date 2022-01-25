class serviceService {
    constructor(repo) {
        this.repo = repo
    }

    async addService() {
        return await this.repo.addOneService()
    }
}

module.exports = {
    serviceService
}