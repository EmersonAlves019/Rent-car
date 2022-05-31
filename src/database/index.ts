import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  database: "carsDB",
  username: "root",
  password: "1234",
});

export default sequelize;
