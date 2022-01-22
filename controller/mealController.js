

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
        if(response == "meal successfully added"){
            res.status(200).json(response);
        }
        else{
            res.status(500).json(response);
        }
    }

    updateMeal = async (req,res)=>{
        let response = await this.service.updateMeal(req.params.id,req.body.quantity)
        if(response == "meal successfully updated"){
            res.status(200).json(response);
        }
        else{
            res.status(500).json(response);
        }
    }
}

module.exports = {
    mealController
}