import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { app } from '../../../shared/infra/http/app';
import createConnection from '../../../shared/infra/typeorm';
import { v4 as uuidv4 } from 'uuid';

let connection: Connection;

let userToken: string;

describe('User Controller', () => {
  jest.setTimeout(70000);
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const response = await request(app)
      .post('/users')
      .send({
        name: "userTest",
        email: "userTest@test.com",
        password: "1234",
        username: "usernameTest",
        type_user: "teste"
      })

    const { body: responseToken } = await request(app)
      .post('/sessions')
      .send({
        email: 'userTest@test.com',
        password: '1234',
      });

    userToken = responseToken.token;


  });

  afterAll(async () => {

    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to get a user profile', async () => {

    const response = await request(app)
      .get('/users/profile')
      .send()
      .set({
        Authorization: `Bearer ${userToken}`,
      });

    console.log(response.body);
    expect(response.status).toBe(200);


  });






});