const responseHandler = require('../response/responseHandler')

class clientController {
    constructor(service) {
        this.service = service
    }

    postClient = async (req, res) => {
        let response = await this.service.installClients(req.body)
        if (response == responseHandler.postAddClientOk()){
            res.status(200).send(responseHandler.postAddClientOk());
        }
        else if(response==responseHandler.tableDoesntExist()){
            res.status(404).json(response)
        }else{
            res.status(400).json(response)
        }
    }
}
module.exports = {
    clientController
}