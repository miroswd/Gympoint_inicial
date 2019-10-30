// Verifica se o usuário está autenticado
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/authConfig';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  // console.log(authHeader);

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token Invalid' });
  }
};
