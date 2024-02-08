import { ColorsServices } from '@/modules/colors/ColorsService'
import { PrismaColorsRepository } from '@/repository/primas-colors-repository'

export function FactoryColorsService() {
  const colorsRepository = new PrismaColorsRepository()
  const colorsService = new ColorsServices(colorsRepository)

  return colorsService
}
