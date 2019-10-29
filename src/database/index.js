// Conexão com o banco de dados - chamado dentro de app.js
import Sequelize from 'sequelize';

// Configurações do banco de dados
import databaseConfig from '../config/database';

// Models
import Admin from '../app/models/Admin';
import Student from '../app/models/Student';

const models = [Admin, Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Responsável pela conexão e carregar os models
    this.connection = new Sequelize(databaseConfig); // Conexão já está feita

    // Percorrendo o array
    models.map(model => model.init(this.connection));
    // A mesma coisa que chamar student.init, admin.init
  }
}

export default new Database();
