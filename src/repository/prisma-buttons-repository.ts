import { prisma } from '@/lib/prisma'

export class PrismaButtonsRepository {
  async listButtons() {
    const buttons = await prisma.buttons.findMany()

    return {
      buttons
    }
  }
  
}
