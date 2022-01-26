const responseHandler = require('../response/responseHandler')

class orderService {
    constructor(repo){
        this.repo = repo
    } 

    async takeOrder(order){
        let isTable = await this.repo.getTableAvaible(order.tableNumber)

        if (isTable) {
            return await this.repo.addOrder(order.order)
        }
        
        return responseHandler.tableNotAvaible();
        
    }
}

module.exports = {
    orderService
}