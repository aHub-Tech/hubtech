import SocialNetworks from 'models/enum/SocialNetworks'

export interface CreatorSocial {
  social: SocialNetworks
  link: string | undefined
}

interface Creator {
  tags: string[]
  socials: CreatorSocial[]

  description: string
  displayName: string
  photo: string
  online: boolean
}

export default Creator
