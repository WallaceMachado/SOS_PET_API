import { Connection, createConnection } from "typeorm";
import request from 'supertest';
import { app } from "../../../shared/infra/http/app";
import { v4 as uuidv4 } from 'uuid';
import { hash } from "bcryptjs";


let connection: Connection;

describe('Animal Controller', () => {
  jest.setTimeout(70000);
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();


  });

  afterAll(async () => {

    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to create a new animal', async () => {
    const id = uuidv4();
    const password = await hash('admin1', 8);

    await connection.query(`
        INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, updated_at, username, type_user, avatar)
        values('${id}', 'admin', 'admin@test.com', '${password}', true, 'now()', 'now()', 'admin','admin','' )
        `);

    const { body: responseToken } = await request(app)
      .post('/sessions')
      .send({
        email: 'admin@test.com',
        password: 'admin1',
      });

    const adminToken = responseToken.token;

    const response = await request(app)
      .post('/animals')
      .send({
        type_animal: "cat",
        name: "nameCat",
        animal_gender: "M",
        breed: "viralata",
        description: "animal vivendo na rua",
        state: "RJ",
        city: "Rio de Janiero",
        age: null
      })
      .set({
        Authorization: `Bearer ${adminToken}`,
      });

    

    expect(response.status).toBe(201);
    expect(response.body.message).toEqual('animal created!');
  });




});