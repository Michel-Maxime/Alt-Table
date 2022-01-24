class ResponseHandler {

    postOk = () => "meal successfully added"

    patchOk = () => "meal successfully updated"  

    getMealsEmpty = () => "Il semble ne pas avoir de plats"

    getMenusEmpty = () => "Il semble ne pas avoir de menus"

    postSeatingPlanOk = () => "Seating plan successfully added"
}


module.exports = new ResponseHandler()