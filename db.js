import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('neondb', 'neondb_owner', 'npg_Abv5CXd8nxqU', {
  host: 'ep-silent-resonance-a8kophpa-pooler.eastus2.azure.neon.tech',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,  // Exige SSL
      rejectUnauthorized: true,  // Rejeita certificados não autorizados
    },
  },
});


// Testando a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
