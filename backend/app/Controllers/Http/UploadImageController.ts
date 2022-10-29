import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Image from 'App/Models/Image'

export default class UploadImageController {
  public async uploadFiles({ request, response }: HttpContextContract) {
    const image = request.file('image', {
      size: '100mb',
      extnames: ['jpg', 'png', 'jpeg', 'PNG', 'JPG', 'JPEG'],
    })

    const fileName = request.input('name')

    if (!image) {
      return response.badRequest('No image found')
    }

    if (!image.isValid) {
      return response.badRequest('Invalid image')
    }

    await image.move(Application.tmpPath('uploads'), {
      name: fileName,
    })

    Image.create({
      name: fileName,
      image_url: image.filePath,
    })

    return response.send('ok')
  }

  public async getFiles({ request, response }: HttpContextContract) {
    const images = await Image.all()

    return response.send(images)
  }
}
