# Gympoint
<h4>Desenvolvimento da aplicação Gympoint - gerenciador de academia</h4>
<p>Segundo desafio do Bootcamp da Rocketseat. </br>
Inicialização do back-end da aplicação.

<h2>Ferramentas</h2>
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>Sucrase + Nodemon</li>
  <li>Yarn</li>
  <li>JWT</li>
  <li>Bcrypt</li>
  <li>Yup</li>
  <li>Sequelize</li>
  <li>Yup</li>
  <li>Postgres</li>
  <li>Docker</li>
  <li>Postbird</li>
</ul>

<h2>Funcionamento</h2>
<p>Através do Admin autenticado na aplicação, é possível adicionar um novo aluno ou atualizar no banco de dados da aplicação.
O admin é autenticado através do JWT. Na criação dos dados do aluno, os seguintes dados são obrigatórios: Nome, email, idade,
peso e altura. Caso esses dados não sejam registrados, não é possível completar a função de adicionar o aluno ao banco de dados, e uma mensagem
de erro é retornada ao usuário.</br>

Na atualização, o admin também precisa estar autenticado. Os dados a serem atualizados não são obrigatórios. Para identificar
o aluno, é passado o id do mesmo, pela URL. Caso o aluno passado pela URL não exista, uma mensagem de erro é retornada.</br>

Após o preenchimento dos dados, seja na criação ou atualização, o Yup faz a verificação dos dados, se o nome é composto por
letras, se o email é válido, entre outras validações para o restante dos dados.</br>

Se tudo estiver de acordo, o aluno é adicionado ao banco de dados da aplicação.
</p>

<h2>Comandos para iniciar a aplicação</h2>

```
$ sudo docker start database
```

```
yarn dev 
```
