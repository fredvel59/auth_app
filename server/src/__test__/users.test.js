import request from 'supertest';
import app from '../app';


describe('GET /users/all', () => {
  test('it should respond with a 200 status code', async () => {
    const response = await request(app)
      .get('/users/all')
      .send()
    expect(response.statusCode).toBe(200)
  })
  test('it should respond with a json object', async () => {
    const response = await request(app)
      .get('/users/all')
      .send()
    expect(response.body).toBeInstanceOf(Array)
  })
  
} )