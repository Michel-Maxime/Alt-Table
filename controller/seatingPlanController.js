const responseHandler = require("../response/responseHandler")

class seatingPlanController{
    constructor(service){
        this.service = service
    }

    postSeatingPlan = async(req,res)=>{
        let response = await this.service.addSeatingPlan(req.body)
        console.log(response)
        if(response == responseHandler.postSeatingPlanOk()){
            res.status(200).json(response)
        }else{
            res.status(500).json(response)
        }
    }
}

module.exports = {seatingPlanController}