import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import kCors from '@koa/cors'
 
const app = new Koa()

//Middlewares
app.use(json())
app.use(bodyParser())
app.use(logger())
app.use(kCors())

//routers 
//public

//private

//default
app.use(async (ctx) => {
  ctx.status = 400
  ctx.body = `la ruta no existe`
})

export default app;