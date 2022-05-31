import { DataTypes, Model } from "sequelize";

import sequelize from "../../../database";

class Specification extends Model {}

Specification.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "specification",
  }
);

sequelize.sync();

export default Specification;
