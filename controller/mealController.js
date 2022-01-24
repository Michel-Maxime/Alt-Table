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

    getMenu = async (req, res) => {
        const menu = await this.service.getMenu()

        if (menu.length != 0 && Array.isArray(menu)) {
            res.status(200).json(menu);
        }
        else if (Array.isArray(menu)) {
            res.status(500).json(responseHandler.getMenusEmpty());
        } else {
            res.status(500).json(menu);
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
        if (response == responseHandler.putOk()) {
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