import { FactoryButtonsService } from '@/factories/FactoryButtonsServices'
import { FastifyReply, FastifyRequest } from 'fastify'

export class ButtonsControllers {
  async listButtons(request: FastifyRequest, reply: FastifyReply) {
    try {
      const buttonsServices = FactoryButtonsService()
      const { buttons } = await buttonsServices.list()

      return reply.status(200).send(buttons)
    } catch (error) {
      return reply
        .status(500)
        .send({ message: error || 'Internal Server Error' })
    }
  }
}
