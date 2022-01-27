const responseHandler = require('../response/responseHandler')

class clientService{
    constructor(repo){
        this.repo = repo
    }
    async installClients(bodyrequest){
        if((bodyrequest.nbClients > 0) && (await this.repo.tableIsAvailable(bodyrequest.tableNumero)==true) && (await this.repo.serviceExist()==true)){
            return await this.repo.addClientsToTable(bodyrequest)
        }else if(await this.repo.serviceExist()==false){
            return "There is no service running"
        }else if(await this.repo.tableIsAvailable(bodyrequest.tableNumero)===undefined){
            return "This table doesn't exist"
        }else{
            return "Table is already taken"
        }
    }
}

module.exports = {
    clientService

}