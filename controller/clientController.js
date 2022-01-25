const responseHandler = require('../response/responseHandler')

class clientController {
    constructor(service) {
        this.service = service
    }

    postClient = async (req, res) => {
        let response = await this.service.installClients(req.body)
        res.status(200).send("OK");
        /*const clients = await this.service.getClients()
        const table = await this.service.getTable(this.response.tableNumero)
        const service = await this.service.getService()
        if (table.available && service.isOn && (clients.numclient > 0) && (clients.numclient <= table.maxClient)) {
            res.status(200).send("OK");
        }
        else{
            res.status(500).send("Error");
        }*/
    }
}
module.exports = {
    clientController
}