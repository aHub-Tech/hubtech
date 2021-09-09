import { ReactNode } from 'react'
import * as S from './styles'
import { ColorProps } from 'components/Button'

export type CardCreatorsProps = {
  tags: string[]
  socials: {
    social: ColorProps
    link: string | undefined
  }[]
  description: string
  displayName: string
  photo: string
  online: boolean
}

const IconType = {
  linkedin: <S.IconLinkedin />,
  twitch: <S.IconTwitch />,
  github: <S.IconGithub />,
  youtube: <S.IconYoutube />,
  facebook: <S.IconFacebook />,
  instagram: <S.IconInstagram />,
  link: <S.IconLinks />
} as { [key: string]: ReactNode }

const CardCreators = ({
  tags,
  socials,
  description,
  displayName,
  photo = 'https://avatars.githubusercontent.com/u/20674439?v=4',
  online
}: CardCreatorsProps) => (
  <S.Wrapper as="section">
    <S.Avatar isOnline={online}>
      <S.AvatarImage src={photo} />
    </S.Avatar>
    <S.NameCreator>{displayName}</S.NameCreator>
    <S.DescriptionCreator>{description}</S.DescriptionCreator>
    <S.WrapperTagLanguage>
      {tags.map(element => (
        <S.TagLanguage key={element}>{element}</S.TagLanguage>
      ))}
    </S.WrapperTagLanguage>

    <S.WrapperBtn>
      {socials.map(element => (
        <S.Btn
          icon={IconType[element.social!] || IconType.link}
          key={element.social}
          aria-label={element.social}
          size="small"
          color={IconType[element.social!] ? element.social : 'link'}
        />
      ))}
    </S.WrapperBtn>
  </S.Wrapper>
)

export default CardCreators
