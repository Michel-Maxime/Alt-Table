class serviceService {
    constructor(repo) {
        this.repo = repo
    }

    async addService() {
        return await this.repo.addOneService()
    }

    async endService(id) {
        return await this.repo.endService(id)
    }
}

module.exports = {
    serviceService
}