import Creator, { CreatorSocial } from 'models/entities/Creator'
import { api } from './api'

class CreatorsService {
  async get(): Promise<Array<Creator>> {
    try {
      const { data } = await api.get<Array<any>>('/creator')
      return data.map<Creator>((_creator: Creator) => ({
        description: _creator.description ?? '',
        online: _creator.online ?? false,
        displayName: _creator.displayName ?? '',
        photo: _creator.photo,
        tags: _creator.tags ?? [],
        socials: _creator.socials?.map<CreatorSocial>(_social => ({
          link: _social.link,
          social: _social.social
        }))
      }))
    } catch (ex) {
      return []
    }
  }
}

const creatorsService = new CreatorsService()
export default creatorsService
