const responseHandler = require('../response/responseHandler')

class orderController {
    constructor(service){
        this.service = service
    }

    takeOrder = async (req, res) => {
        let response = await this.service.takeOrder(req.body)

        if (response == responseHandler.postOrderOK()){
            res.status(200).send(response);
        }
        else if(response == responseHandler.tableNotAvaible()){
            res.status(404).json(response)
        }else{
            res.status(400).json(response)
        }
    }
}

module.exports = {
    orderController
}