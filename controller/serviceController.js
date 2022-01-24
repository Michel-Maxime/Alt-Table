const responseHandler = require("../response/responseHandler")

class serviceController {
    constructor(service) {
        this.service = service
    }

    postService = async (req, res) => {
        let response = await this.service.addService(req.body)
        console.log(response)
        if (response == responseHandler.postServicePlanOk()) {
            res.status(200).json(response)
        } else {
            res.status(500).json(response)
        }
    }
}

module.exports = {
    serviceController
}