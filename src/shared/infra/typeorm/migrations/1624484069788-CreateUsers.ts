import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624484069788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "type_user",
                        type: "varchar",
                        
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },

                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
