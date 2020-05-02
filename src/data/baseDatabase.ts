import knex from "knex";

export class BaseDatabase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  });

  async getAllServices() {
    try {
      const query = await this.connection.raw(
        `SELECT * FROM megahack_services`
      )

      return query
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }
}
