// Rotas de acesso
import { Router } from 'express';

// Models
// import Student from './app/models/Student';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/authMIddleware';

const routes = Router();
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

/*
Lá no Insomnia

Crio uma nova workspace
Defino um manager environment (base_url:"localhost:3333/")
Crio uma pasta 'Students'
Crio uma request 'Create' - POST -JSON
  {
    //passo os dados que quero informar
    "name":"nome",
    "email":"email@email.com"
  }


*/

/*

{  {  {   ROTA UTILIZADA PARA TESTE   }  }  }

// async -> não acontece em tempo real
routes.get('/student', async (req, res) => {
  const student = await Student.create({
    name: 'Péricles',
    email: 'periclaomundo@email.com',
    age: 50,
    weight: 175,
    height: 190,
  });

  return res.json(student);
});

 routes.get('/', (req, res) => res.json({ message: 'Hello World!!' }));

 */

export default routes;
