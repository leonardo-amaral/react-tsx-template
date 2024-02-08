import { FactoryColorsService } from '@/factories/FactoryColorsService'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export class ColorsControllers {
  async addColors(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      color: z.string(),
      name: z.string()
    })
    try {
      const { color, name } = bodySchema.parse(request.body)

      const colorsService = FactoryColorsService()
      const { colors } = await colorsService.addColors({ color, name })

      return reply.status(200).send(colors)
    } catch (error) {
      return reply.status(500).send({
        message: error || 'Internal Server Error'
      })
    }
  }
  async listColors(request: FastifyRequest, reply: FastifyReply) {
    try {
      const colorsService = FactoryColorsService()
      const { colorsObject } = await colorsService.listColors()

      return reply.status(200).send(colorsObject)
    } catch (error) {
      return reply.status(500).send({
        message: error || 'Internal Server Error'
      })
    }
  }
  async updateColors(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      id: z.string(),
      color: z.string(),
      name: z.string()
    })
    try {
      const { color, name, id } = bodySchema.parse(request.body)

      const colorsService = FactoryColorsService()
      const { colors } = await colorsService.updateColor({ id, color, name })

      return reply.status(200).send(colors)
    } catch (error) {
      return reply.status(500).send({
        message: error || 'Internal Server Error'
      })
    }
  }
}
