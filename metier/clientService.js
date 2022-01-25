class clientService{
    constructor(repo){
        this.repo = repo
    }
    async installClients(bodyrequest){
        if(bodyrequest.nbClients > 0 && this.repo.tableIsAvailable(bodyrequest.tableNumero) && this.repo.getServiceAvailable()){
            return await this.repo.addClientsToTable(bodyrequest)
        }
    }
}

module.exports = {
    clientService

}