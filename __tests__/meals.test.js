const request = require('supertest')

describe("Meals Routes", () => {

    it('test /meals GET', async () => {
        const res = await request("localhost:8000").get('/meals');
        expect(res.status).toBe(200)
    });

    it('test /meals POST', async () => {
        const res = await request("localhost:8000")
            .post("/meals")
            .send(
                {
                    name: 'Added Meal 56',
                    description: 'Id test meal',
                    type: 'plat principal',
                    price: 15
                }
            )
        expect(res.status).toBe(400);
    })

    it('test /meals PUT', async () => {
        const res = await request("localhost:8000")
            .put("/meals/61e97f18e34305a0c9fcf4be")
            .send(
                {
                    quantity: 10
                }
            )
        expect(res.status).toBe(200);
    })

})

describe("Menu Routes", () => {
    it('test /menu GET', async () => {
        const res = await request("localhost:8000").get('/menu');
        expect(res.status).toBe(200)
    });
}) 