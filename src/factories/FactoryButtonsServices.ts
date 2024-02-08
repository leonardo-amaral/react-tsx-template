import { ButtonsServices } from '@/modules/buttons/ButtonsServices'
import { PrismaButtonsRepository } from '@/repository/prisma-buttons-repository'

export function FactoryButtonsService() {
  const buttonsRepository = new PrismaButtonsRepository()
  const buttonsService = new ButtonsServices(buttonsRepository)

  return buttonsService
}
