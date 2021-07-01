
enum AnimalType {
  CAT = 'cat',
  DOG = 'dog',
}


interface ICreateAnimalsDTO {
  id?: string;
  protector_id: string;
  adopter_id?: string;
  type_animal: AnimalType;
  name: string;
  animal_gender: string;
  breed: string;
  description: string;
  state: string;
  city: string;
  age?: number;
  avatar?: string;
}

export { ICreateAnimalsDTO }