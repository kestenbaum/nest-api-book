import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1764253437453 implements MigrationInterface {
  name = 'Migration1764253437453';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "book" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar(25) NOT NULL, "author" varchar(25) NOT NULL, "publishedYear" datetime NOT NULL, CONSTRAINT "UQ_85c8d63d50f8e617e2a49176718" UNIQUE ("author"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "book"`);
  }
}
