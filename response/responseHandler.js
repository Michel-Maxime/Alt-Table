class ResponseHandler {

    postMealOk = () => "Meal successfully added"

    mealAlreadyExist = () => "Meal already exist with this name"

    patchMealOk = () => "Meal successfully updated"

    getMealsEmpty = () => "There is no meals"

    deleteMealOk = () => "Meal successfully deleted"

    getMenusEmpty = () => "There is no menu available"

    postSeatingPlanOk = () => "Seating plan successfully added"

    postServiceOk = () => "Service successfully created"

    patchServiceOk = () => "Service successfully ended"

    addClientsOk = () => "Clients successfully installed"

    postAddClientOk  = () => "Clients are installed to their table"

    tableDoesntExist  = () => "This table doesn't exist"
}


module.exports = new ResponseHandler()