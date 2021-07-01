import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../../accounts/infra/typeorm/entities/User";
import { v4 as uuid } from 'uuid';

enum AnimalType {
  CAT = 'cat',
  DOG = 'dog',
}

@Entity('animals')
class Animal {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('uuid')
  protector_id: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'protector_id' })
  protector: User;

  @Column('uuid')
  adopter_id: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'adopter_id' })
  adopter: User;

  @Column({ type: 'enum', enum: AnimalType })
  type_animal: AnimalType;

  @Column()
  name: string;

  @Column()
  animal_gender: string;

  @Column()
  breed: string;

  @Column()
  description: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  age: number;
  
  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Animal }