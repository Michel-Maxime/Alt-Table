const request = require('supertest')

describe("Meals Routes", () => {

    it('GET /meals should return 200 response', async () => {
        const res = await request("localhost:8000").get('/meals');
        expect(res.status).toBe(200)
    });

    it('POST /meals should return 200 response', async () => {
        const res = await request("localhost:8000")
            .post("/meals")
            .send(
                {
                    name: 'Jest meal',
                    description: 'Jest meal',
                    type: 'plat',
                    price: 15
                }
            )
        expect(res.status).toBe(200);
    })

    it('POST /meals duplicate should return 400 response', async () => {
        const res = await request("localhost:8000")
            .post("/meals")
            .send(
                {
                    name: 'Jest meal',
                    description: 'Jest meal',
                    type: 'plat',
                    price: 15
                }
            )
        expect(res.status).toBe(400);
    })

    it('DELETE /meals/Jest meal should return 200 response', async () => {
        const res = await request("localhost:8000")
            .delete("/meals/Jest meal")
            .send()
        expect(res.status).toBe(200);
    })

    it('PATCH /meals/Jest meal should return 200 response', async () => {
        const res = await request("localhost:8000")
            .patch("/meals/Jest meal")
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