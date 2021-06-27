interface IUserResponseDTO {
  email: string;
  name: string;
  username: string;
  id: string;
  avatar: string;
  type_user: string;
  avatar_url(): string;
}

export { IUserResponseDTO } 