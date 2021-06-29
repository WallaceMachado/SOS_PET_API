import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { app } from '../../../shared/infra/http/app';
import createConnection from '../../../shared/infra/typeorm';
import { v4 as uuidv4 } from 'uuid';

let connection: Connection;

describe('User Controller', () => {
  jest.setTimeout(70000);
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


    expect(response.body.message).toBe('Username already exists');
  });

  it('Should be able to get all users', async () => {

    const id = uuidv4();
    const password = await hash('admin', 8);

    await connection.query(`
        INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, updated_at, username, type_user, avatar)
        values('${id}', 'admin', 'admin@test.com', '${password}', true, 'now()', 'now()', 'admin','admin','' )
        `);

    const { body: responseToken } = await request(app)
      .post('/sessions')
      .send({
        email: 'admin@test.com',
        password: 'admin',
      });

    const adminToken = responseToken.token;

    const response = await request(app)
      .get('/users')
      .send()
      .set({
        Authorization: `Bearer ${adminToken}`,
      });

    expect(response.status).toBe(200);
  });


});