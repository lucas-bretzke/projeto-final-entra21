'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    static associate(models) {
      this.belongsToMany(models.User, { through: "turmas_users", foreignKey: "turma_id" });
      this.hasMany(models.Materia, { foreignKey: "turma_id" });
    }
  };
  Turma.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};