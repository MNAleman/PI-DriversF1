const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  // Luego le injectamos la conexion a sequelize.
  // defino el modelo
  sequelize.define(
    'Driver',
    {
      id: {
        type: DataTypes.UUID, // es el tipo de datos de combinacion de letras y numeros
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 // crea un numero aleatorio de identificación uuid y v4 es el algoritmo que utiliza para crear este dato

      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    },
    { timestamps: false });
};