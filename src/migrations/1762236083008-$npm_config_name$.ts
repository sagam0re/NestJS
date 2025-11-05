import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName$1762236083008 implements MigrationInterface {
    name = ' $npmConfigName$1762236083008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "createdAt"`);
    }

}
