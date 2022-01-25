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
            res.status(400).json(response) //voir code réponse HTTP pour une erreur du front
        }else{
            res.status(400).json(response)
        }
    }
}
module.exports = {
    clientController
}