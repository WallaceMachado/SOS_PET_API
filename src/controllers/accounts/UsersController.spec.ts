import request from 'supertest';
import { Connection } from 'typeorm';
import { app } from '../../shared/infra/http/app';
import createConnection from '../../shared/infra/typeorm';


let connection: Connection;

describe('Create User Controller', () => {

  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();


  });

  afterAll(async () => {
    
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: "userTest",
        email: "userTest@test.com",
        password: "1234",
        username: "usernameTest",
        type_user: "teste"
      })


    expect(response.status).toBe(201);
  });


  it('Should not be able to create a user to email Already Exists', async () => {

    const response = await request(app)
      .post('/users')
      .send({
        name: "userTest",
        email: "userTest@test.com",
        password: "1234",
        username: "usernameTest",
        type_user: "teste",
      })
    console.log(response.body.message);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Email already exists');
  });

  it('Should not be able to create a user to username Already Exists', async () => {

    const response = await request(app)
      .post('/users')
      .send({
        name: "userTest",
        email: "userTest2@test.com",
        password: "1234",
        username: "usernameTest",
        type_user: "teste",
      })

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Username already exists');
  });


});