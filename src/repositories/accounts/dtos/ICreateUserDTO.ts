interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  type_user: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO }
