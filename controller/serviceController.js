const responseHandler = require("../response/responseHandler")

class serviceController {
    constructor(service) {
        this.service = service
    }

    postService = async (req, res) => {
        let response = await this.service.addService()
        console.log(response)
        if (response == responseHandler.postServiceOk()) {
            res.status(200).json(response)
        } else {
            res.status(500).json(response)
        }
    }

    endService = async (req, res) => {
        let response = await this.service.endService(req.params.id)
        if (response == responseHandler.patchServiceOk()) {
            res.status(200).json(response);
        }
        else {
            res.status(500).json(response);
        }
    }
}

module.exports = {
    serviceController
}