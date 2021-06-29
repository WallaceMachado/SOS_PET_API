import request from 'supertest';
import { Connection } from "typeorm";
import { app } from '../../../shared/infra/http/app';
import createConnection from '../../../shared/infra/typeorm';


let connection: Connection;


describe('Authenticate User', () => {
  jest.setTimeout(70000);
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    await request(app)
      .post('/users')
      .send({
        name: "userTest",
        email: "userTest@test.com",
        password: "1234",
        username: "usernameTest",
        type_user: "teste"
      })


  });

  afterAll(async () => {

    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to authenticate user', async () => {


    const response = await request(app)
      .post('/sessions')
      .send({
        email: "userTest@test.com",
        password: "1234"
      })


    expect(response.body).toHaveProperty('token');
  });



  it('Should not be able to authenticate nonexistent user', async () => {


    const response = await request(app)
      .post('/sessions')
      .send({
        email: "incorrectEmail@test.com",
        password: "1234"
      })


    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email or password incorrect!");
  });

  it('Should not be able to authenticate user with incorrect password', async () => {


    const response = await request(app)
      .post('/sessions')
      .send({
        email: "userTest@test.com",
        password: "incorrectPassword"
      })


    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Email or password incorrect!");
  });



});