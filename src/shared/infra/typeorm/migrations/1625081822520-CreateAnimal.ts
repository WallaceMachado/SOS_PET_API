import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnimal1625081822520 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
            name: 'animals',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
              },
              {
                name: 'protector_id',
                type: 'uuid',
              },
              {
                name: 'adopter_id',
                type: 'uuid',
                isNullable: true,
              },
              {
                name: 'type_animal',
                type: 'enum',
                enum: ['cat', 'dog']
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'animal_gender',
                type: 'varchar',
              },
              {
                name: 'breed',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'state',
                type: 'varchar',
              },
              {
                name: 'city',
                type: 'varchar',
              },
              {
                name: 'age',
                type: 'numeric',
                isNullable: true,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
            foreignKeys: [
              {
                name: 'FKProtectorAnimal',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['protector_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
              },
              {
                name: 'FKAdopterAnimal',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['adopter_id'],
                onDelete: 'SET NULL',
                onUpdate: 'SET NULL',
              },
            ],
          })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('animals');
    }

}
