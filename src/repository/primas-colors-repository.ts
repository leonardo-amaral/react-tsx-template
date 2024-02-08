import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export type UpdateColorProps = {
  id: string
  name: string
  color: string
}

export class PrismaColorsRepository {
  async listColors() {
    const colors = await prisma.colors.findMany()

    return {
      colors
    }
  }

  async addColors(data: Prisma.ColorsCreateInput) {
    const colors = await prisma.colors.create({
      data
    })

    return {
      colors
    }
  }

  async updateColors({ id, name, color }: UpdateColorProps) {
    const colors = await prisma.colors.update({
      where: {
        id
      },
      data: {
        name,
        color
      }
    })
    return {
      colors
    }
  }
}
