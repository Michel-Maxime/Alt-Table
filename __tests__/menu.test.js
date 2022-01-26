const request = require('supertest')

describe("Menu Routes", () => {
    it('GET /menu should return 200 response', async () => {
        const res = await request("localhost:8000").get('/menu');
        expect(res.status).toBe(200)
    });
})
