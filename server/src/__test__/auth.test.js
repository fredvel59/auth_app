import request from 'supertest';
import app from '../app.js';

const server = request(app);

describe('POST /auth/signup', () => {
    const data = {
        name: 'Freddy Erick Velarde',
        password: 'freddyqwe',
        email: 'freddyvelarde59@gmail.com'
    }
    test('application/json - it should respond with a json', async () => {
        request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send(data)
            .expect('Content-type', /json/)
    })

    test('it should respond a 200 status code', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                name: 'Freddy Erick Velarde',
                password: 'freddyqwe',
                email: 'freddyvelarde59@gmail.com'
            })
        expect(response.statusCode).toBe(200)
    })

    test('No user name - it should with arespond a bad request', async () => {

        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                name: '',
                password: 'freddyqwe',
                email: 'freddyvelarde59@gmail.com.test'
            })
        expect(response.body.message).toEqual('your name must contain greater than 5 characterers and less than 25')
        expect(response.body.response).toBe(400);
    })

    test('bad email - it should respond a bad request', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .set('Accept', 'application/json')
            .send({
                name: 'Freddy Erick Velarde',
                password: 'freddyqwe',
                email: ''
            })
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


describe('POST /auth/login', () => {
    const url = '/auth/login'
    test('status 200 - It should respond with a 200 status code', async () => {
        const response = await server
            .post(url)
            .set('Accept', 'application/json')
            .send({
                password: 'freddy123',
                email: 'freddyvelarde59@gmail.com'
            })
        expect(response.statusCode).toBe(200)
    });
    // test('Password missing = It should respond with a bad request', async () => {
    //     const response = await server
    //         .post(url)
    //         .set('Accept', 'application/json')
    //         .send({
    //             password: '',
    //             email: 'freddyvelarde59@gmail.com'
    //         })
    //     expect(response.body.auth).toBe(false)
    //     expect(response.body.message).toEqual('please add your password')
    // });
    // test('Email missing - It should respond with a bad request', async () => {
    //     const response = await server
    //         .post(url)
    //         .set('Accept', 'application/json')
    //         .send({
    //             password: 'freddy123',
    //             email: ''
    //         })
    //     expect(response.body.auth).toBe(false)
    //     expect(response.body.message).toEqual('please add your email')
    // });
    test('LogIn success - It should respond with a goood request', async () => {
        const response = await server
            .post(url)
            .set('Accept', 'application/json')
            .send({
                password: 'freddy123',
                email: 'freddyvelarde59@gmail.com'
            })
        expect(response.body.auth).toBe(true)
    });
    test('Password is not correct - It should respond with a bad request', async () => {
        const response = await server
            .post(url)
            .set('Accept', 'application/json')
            .send({
                password: 'fredyqwer',
                email: 'freddyvelarde59@gmail.com'
            })
        expect(response.body.auth).toBe(false)
        expect(response.body.message).toEqual('Your password is not correct')
    });
    test('Email dosent exists - it should respond with a bad request', async () => {
        const response = await server
            .post(url)
            .set('Accept', 'application/json')
            .send({
                password: 'fredyqwer',
                email: "This.email.doesent.exists@lol.com"
            })
        expect(response.body.auth).toBe(false)
        expect(response.body.message).toEqual('your email does not exists, please try again')
    });
    test('Email is not confirmed', async () => {
        const response = await server
            .post(url)
            .set('Accept', 'application/json')
            .send({
                password: 'freddy123',
                email: "test@gmail.com"
            })
        expect(response.body.auth).toBe(false)
        expect(response.body.message).toEqual('Your email is not confirmed')
    });
});


