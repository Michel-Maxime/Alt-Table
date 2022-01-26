const responseHandler = require('../response/responseHandler')

class menuController {
    constructor(service) {
        this.service = service
    }

    getMenu = async (req, res) => {
        const menu = await this.service.getMenu()

        if (menu.length != 0 && Array.isArray(menu)) {
            res.status(200).json(menu);
        }
        else if (Array.isArray(menu)) {
            res.status(500).json(responseHandler.getMenusEmpty());
        } else {
            res.status(500).json(menu);
        }
    }
}

module.exports={
    menuController
}