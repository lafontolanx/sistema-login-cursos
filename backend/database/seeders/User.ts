import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        email: 'professor@hotmail.com',
        password: 'professor',
      },
      {
        email: 'admin@hotmail.com',
        password: 'admin',
      },
    ])
  }
}
