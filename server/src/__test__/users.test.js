import request from 'supertest';
import app from '../app';
import {accessToken} from './auth.test.js';

describe('GET /users/all', () => {
  test('it should respond with a 200 status code', async () => {
    const response = await request(app)
      .get('/users/all')
      .set('access-token', accessToken)
      .send()
    expect(response.statusCode).toBe(200)
    console.log(response.body);
  })
  test('it should respond with a json object', async () => {
    const response = await request(app)
      .get('/users/all')
      .set('access-token', accessToken)
      .send()
    expect(response.body).toBeInstanceOf(Array)
  })
  
} )