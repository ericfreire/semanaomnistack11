/*
 * Rota / Recurso
 */

/*
 * Métodos HTTP:
 * GET: buscar uma informação no back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deltar uma informação no backend
 */

/*
 * Tipos de parâmetros:
 *
 * Query Params: parâmetrps nomeados enviados na rota após "?" (Filtros, páginação)
 * Route Params: parâmetros utilizados para identifcar recursos
 * Request Body: Corpo da requisição, utilizado apra criar alterar recursos
 */

/*
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQl Server
 * NoSQL: MongoDB, CoucjDB, etc...
 * 
 */

/*
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 *
 */

const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)