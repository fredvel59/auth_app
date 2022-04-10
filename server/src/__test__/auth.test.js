const request = require( 'supertest');
const app = require('../app');

describe('POST /auth/signup', () => {
  const data = {
    name: 'test name1',
    password: 'testpassword',
    email: 'test@gmail.com.dev'
  }

  test('application/json - it should respond with a json', async () => {
    const response = await request(app)
      .post('/auth/signup')
      .set('Accept', 'application/json')
      .send(data)
      .expect('Content-type', /json/)
    // expect(response.header["Content-Type"]).toMatch(/json/);
  })

  // test('SignUp success - it should respond a 200 status code', async () => {
  //   const response = await request(app)   
  //     .post('/auth/signup')
  //     .set('Accept', 'application/json') 
  //     .send({name: 'user testl', email: "test@gmail", password: "test123"})
  //   expect(response.body.response).toBe(200)
  //   console.log(response.body);
  // })
  
  test('No user name - it should with arespond a bad request', async () => {

    const response = await request(app)
      .post('/auth/signup')
      .set('Accept', 'application/json')
      .send({
        name: "",
        email: "user@mail.com",
        password: "123"
      })
    expect(response.body.message).toEqual('Add your name please')
    expect(response.body.response).toBe(400);
  })

  test('bad email - it should respond a bad request', async () => {
    data.email = '';
    const response = await request(app)
      .post('/auth/signup')
      .set('Accept', 'application/json')
      .send(data)
    expect(response.body.response).toBe(400);
  })

  test('Email exists - it should respond a bad request', async () => {
    const user = {
      email: 'test@gmail.com',
      name: 'test user',
      password: 'test123'
    }
    const response = await request(app)
      .post('/auth/signup')
      .set('Accept', 'application/json')
      .send(user)
    expect(response.body.response).toBe(400);
    expect(response.body.message).toEqual('Your email is already used, please send a new email')
  })

  // test("empty request's body - it should respond with a bad resquest", async () => {
  //   const response = await request(app)
  //     .post('/auth/signup')
  //     .set('Accept', 'application/json')
  //     .send({})
  //   expect(response.body.response).toBe(400);
  //   expect(response.body.message).toEqual('Please add data')
  // })
})



