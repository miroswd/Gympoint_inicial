// Feature de criação - registro de alunos dentro da API
import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

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

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (!student) {
      // Avalia se o id passado é válido
      return res.status(400).json({ error: 'Student does not exists' });
    }

    if (email !== student.email) {
      const studentExists = await Student.findOne({
        where: { email },
      });

      if (studentExists) {
        // Bad request
        return res.status(400).json({ error: 'Student already exists' });
      }
    }

    const { id, name, age, weight, height } = await student.update(req.body);

    return res.json({ id, name, email, age, weight, height });
  }
}

export default new StudentController();
