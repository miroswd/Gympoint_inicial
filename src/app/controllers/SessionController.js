// Autenticação do ADM
import jwt from 'jsonwebtoken';
import Adm from '../models/Admin';

class SessionController {
  async store(req, res) {
    // Criação da session
    const { email, password } = req.body;

    const admin = await Adm.findOne({ where: { email } });

    // Verificando se existe o admin
    if (!admin) {
      return res.status(401).json({ error: 'Admin not found' });
    }

    // Verificação do match da password
    if (!(await admin.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    // Se chegou até aqui os dados foram passados corretamente

    // Retornando informações
    const { id, name } = admin;

    return res.json({
      admin: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '8002b8fc12616389a693e500e999a6c0', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
