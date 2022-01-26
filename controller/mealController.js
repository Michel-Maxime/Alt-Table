const responseHandler = require('../response/responseHandler')

class mealController {
    constructor(service) {
        this.service = service
    }

    getMeal = async (req, res) => {
        const meals = await this.service.getMeals()

        if (meals.length != 0 && Array.isArray(meals)) {
            res.status(200).json(meals);
        }
        else if (Array.isArray(meals)) {
            res.status(500).json(responseHandler.getMealsEmpty());
        } else {
            res.status(500).json(meals);
        }
    }

    postMeal = async (req, res) => {
        let response = await this.service.addMeal(req.body)
        if (response == responseHandler.postOk()) {
            res.status(200).json(response);
        }
        else {
            res.status(400).json(response);
        }
    }

    updateMeal = async (req, res) => {
        let response = await this.service.updateMeal(req.params.id, req.body.quantity)
        if (response == responseHandler.patchOk()) {
            res.status(200).json(response);
        }
        else {
            res.status(500).json(response);
        }
    }

    deleteMeal = async (req, res) => {
        let response = await this.service.deleteMealByName(req.params.name)
        if (response == responseHandler.deleteMealOk()) {
            res.status(200).json(response);
        }
        else {
            res.status(500).json(response);
        }
    }
}

module.exports = {
    mealController
}