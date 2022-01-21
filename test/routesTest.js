import { request } from 'express'
import { routes } from '../routes'
const app = require("../config/server")

describe("Add meal", () => {
    const meal = { name: "Tacos triple viande", description: "Un tacos bien sale", type: "plat", price: 10.5, quantity: 0 }
    it('test /meals POST route ', async () => {
        const response = await request(app).post("/meals").send(meal);
        expect(response.body).toEqual("ok")
    })
})