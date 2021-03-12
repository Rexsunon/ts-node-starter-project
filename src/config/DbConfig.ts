import { ConnectionOptions } from 'typeorm';

export default class DbConfig {
  /**
   * RealationalDbConnection
   *
   * @param type Type of relational db (eg. mysql, postgres, mssql etc...)
   * @param host Database host (eg. localhost etc..)
   * @param port Database port {eg. 3324}
   * @param username Database username
   * @param password Database password
   * @param database Database name
   * @param entity Database entities (tables/db models)
   * @returns typeorm ConnectionOptions
   */
  public async RealationalDbConnection(
    type: string,
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    entity: []
  ) {
    const config: ConnectionOptions = {
      type: 'mysql' || type,
      host: host,
      port: port,
      username: username,
      password: password,
      database: database,
      entities: entity,
      synchronize: true,
    };

    return config;
  }
}
