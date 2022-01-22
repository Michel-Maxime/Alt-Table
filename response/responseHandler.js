class ResponseHandler {

    postOk = () => "meal successfully added"

    putOk = () => "meal successfully updated"  

    getMealsEmpty = () => "Il semble ne pas avoir de plats"

    getMenusEmpty = () => "Il semble ne pas avoir de menus"
}

module.exports = new ResponseHandler()