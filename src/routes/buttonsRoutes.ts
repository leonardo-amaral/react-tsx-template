import { ButtonsControllers } from '@/modules/buttons/ButtonsControllers'
import { FastifyInstance } from 'fastify'

const buttonsController = new ButtonsControllers()

export async function buttonsRoutes(app: FastifyInstance) {
  app.get('/', buttonsController.listButtons)
}
