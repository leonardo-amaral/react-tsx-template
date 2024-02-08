import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { buttonsRoutes } from './routes/buttonsRoutes'
import { colorsRoutes } from './routes/colorsRoutes'

export const app = fastify()

app.register(buttonsRoutes, { prefix: '/buttons' })
app.register(colorsRoutes, { prefix: '/colors' })

app.register(fastifyCors, { origin: '*' })
