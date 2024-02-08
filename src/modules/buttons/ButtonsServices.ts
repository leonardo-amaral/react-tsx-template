import { PrismaButtonsRepository } from '@/repository/prisma-buttons-repository'

export class ButtonsServices {
  constructor(private buttonsRepository: PrismaButtonsRepository) {}
  async list() {
    const { buttons } = await this.buttonsRepository.listButtons()
    if (!buttons) {
      throw new Error('Not found')
    }

    const buttonsObject: any = {}
    for (const button of buttons) {
      buttonsObject[button.name] = button
    }

    return {
      buttons
    }
  }
}
