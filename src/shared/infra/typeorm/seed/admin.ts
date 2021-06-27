import { hash } from "bcryptjs";
import createConnection from '../index';

import { v4 as uuidv4 } from 'uuid';


async function create() {
  const connection = await createConnection();

  const id = uuidv4();
  const password = await hash('admin', 8);

  await connection.query(`
    INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, updated_at, username, type_user, avatar)
    values('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'now()', 'admin','admin','' )
    `);

  connection.close();
}

create().then(() => console.log('Admin user created!'));