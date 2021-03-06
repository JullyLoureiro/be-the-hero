const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.latest()
    })

    afterAll(()=>{
        connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD",
            email: "contato@apad.com",
            whatsapp: "21999990000",
            city: "Niterói",
            uf: "RJ"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)

    })
})