class menuService {
    constructor(repo) {
        this.repo = repo
    }
    async getMenu() {
        let menu = await this.repo.getMenu()
        return menu
    }
}

module.exports = {
    menuService
}