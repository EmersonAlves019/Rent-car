import "reflect-metadata";

import express from "express";
import swaggerUi from "swagger-ui-express";

import sequelize from "./database";
import router from "./routes";
import swaggerFile from "./swagger.json";

import "./shared/container";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

(async () => {
  try {
    await sequelize.authenticate();

    app.listen(4001, () => console.log("server running on port 4001"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
