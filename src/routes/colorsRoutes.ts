import { ColorsControllers } from '@/modules/colors/ColorsControllers'
import { FastifyInstance } from 'fastify'

const colorsController = new ColorsControllers()

export async function colorsRoutes(app: FastifyInstance) {
  app.get('/', colorsController.listColors)
  app.post('/', colorsController.addColors)
  app.put('/', colorsController.updateColors)
}
