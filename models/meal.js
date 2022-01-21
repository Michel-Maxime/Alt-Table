class Meal {
    constructor(id, name, description, type, price, quantity) {
      this.id = id
      this.name = name
      this.description = description
      this.type = type
      this.price = price
      this.quantity = quantity // doit être a 0
    }
  }
  
module.exports = { Meal }