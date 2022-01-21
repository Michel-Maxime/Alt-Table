

class mealController {
    constructor(service){
        this.service = service
    }

    getMeal = async (req, res) => {
        const meals = await this.service.getMeals()
        if(meals.length != 0){
            res.status(200).json(meals);
        }
        else{
            res.status(500).json("Il semble ne pas avoir de plats");
        }  
    }

    getMenu = async (req, res) => {
        const menu = await this.service.getMenu()
        if(menu.length != 0){
            res.status(200).json(menu);
        }
        else{
            res.status(500).json("Il semble ne pas avoir de menus");
        } 
    }

    postMeal = async (req, res) => {
        let response = await this.service.addMeal(req.body)
        //console.log(req.body);
        res.send(response);
    }
}

module.exports = {
    mealController
}