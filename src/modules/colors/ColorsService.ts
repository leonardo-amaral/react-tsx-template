import {
  PrismaColorsRepository,
  UpdateColorProps
} from '@/repository/primas-colors-repository'

type CreateColorsInput = {
  name: string
  color: string
}

export class ColorsServices {
  constructor(private colorsRepository: PrismaColorsRepository) {}

  async listColors() {
    const { colors } = await this.colorsRepository.listColors()
    if (!colors) {
      throw new Error('Not found')
    }

    const colorsObject: any = {}
    for (const color of colors) {
      colorsObject[color.name] = color
    }

    return {
      colorsObject
    }
  }

  async addColors({ color, name }: CreateColorsInput) {
    const { colors } = await this.colorsRepository.addColors({
      color,
      name
    })

    return {
      colors
    }
  }

  async updateColor({ color, id, name }: UpdateColorProps) {
    const { colors } = await this.colorsRepository.updateColors({
      color,
      id,
      name
    })
    return {
      colors
    }
  }
}
