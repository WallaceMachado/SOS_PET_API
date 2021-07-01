import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterAnimalAddAvatar1625138475754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'animals',
            new TableColumn({
                name: 'avatar',
                type: 'varchar',
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('animals', 'avatar');
    }

}
