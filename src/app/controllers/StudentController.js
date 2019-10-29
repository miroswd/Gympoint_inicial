// Feature de criação - registro de alunos dentro da API

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    // Validação de email - se já existir
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      // Bad request
      return res.status(400).json({ error: 'Student already exists' });
    }

    // Recebe os dados
    // const student = await Student.create(req.body); // O model Student já define os campos possíveis
    const { id, name, email, age, weight, height } = await Student.create(
      req.body
    ); // Retornando só alguns dados para o frontEnd

    return res.json({ id, name, email, age, weight, height });
    // Importa em routes.js
  }
}

export default new StudentController();
