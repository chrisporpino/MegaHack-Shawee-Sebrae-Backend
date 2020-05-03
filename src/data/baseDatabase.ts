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

      return query[0]
      
    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }

  async getAllLocations() {
    try {
      const query = await this.connection.raw(
        `SELECT * FROM megahack_locations`
      )

      return query[0]

    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }

  async getUserByEmail(email:string){
    try {
      const query = await this.connection.raw(
        `SELECT * FROM megahack_users
        WHERE email = "${email}"`
      )

      return query[0][0]

    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }

  async getAllEvents() {
    try {
      const query = await this.connection.raw(
        `SELECT * FROM megahack_events`
      )

      return query[0]

    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }

  async getAllProducts() {
    try {
      const query = await this.connection.raw(
        `SELECT * FROM megahack_products`
      )

      return query[0]

    } catch (err) {
      throw new Error(err.sqlMessage)
    }
  }
}
