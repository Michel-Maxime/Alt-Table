const responseHandler = require('../response/responseHandler')

class clientService{
    constructor(repo){
        this.repo = repo
    }
    async installClients(bodyrequest){
        if((bodyrequest.nbClients > 0) && (await this.repo.tableIsAvailable(bodyrequest.tableNumero)==true) && (await this.repo.getServiceAvailable()==true)){
            return await this.repo.addClientsToTable(bodyrequest)
        }else if(await this.repo.tableIsAvailable(bodyrequest.tableNumero)=="This table doesn't exist"){ //Refacto condition 
            return "This table doesn't exist"
        }else{
            return "Table is already taken"
        }
    }
}

module.exports = {
    clientService

}