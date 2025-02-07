import { Sequelize, DataTypes } from 'sequelize';

// Usando um banco SQLite em memória
const sequelize = new Sequelize('sqlite::memory:');

// Definição do modelo Categoria
const Categoria = sequelize.define('categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    img_url: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
},
{
    tableName: 'categoria'
});

export default Categoria;