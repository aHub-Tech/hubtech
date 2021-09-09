import {
  Twitch,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Links
} from '@styled-icons/remix-line'
import styled from 'styled-components'
import T from 'theme'
import * as C from 'components'

export const Wrapper = styled(T.layouts.Col)`
  background-color: ${T.colors.darkBlue};
  border-radius: ${T.border.borderRadius.large};
  padding: 3rem 2rem;
  align-items: center;
  width: 100%;
  border-bottom: 0.5rem solid ${T.colors.primary};
`

export const Avatar = styled.div<{ isOnline: boolean }>`
  display: flex;
  width: fit-content;
  border-radius: ${T.border.borderRadius.circle};
  border: 0.3rem solid
    ${({ isOnline }) => (isOnline ? T.colors.success : T.colors.primary)};
`

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  padding: 0.2rem;
`

export const NameCreator = styled.h2`
  color: ${T.colors.white};
  margin: 1rem 0;
  font-weight: ${T.typography.weight.medium};
`

export const DescriptionCreator = styled.p`
  color: ${T.colors.white};
  margin-bottom: 1rem;
`

export const WrapperTagLanguage = styled(T.layouts.Row)`
  flex-wrap: wrap;
  margin: 0 1rem;
  justify-content: center;
`

export const TagLanguage = styled.span`
  margin-right: 1rem;
  margin-top: 1rem;
  border: 1px solid ${T.colors.white};
  border-radius: ${T.border.borderRadius.large};
  color: ${T.colors.white};
  padding: 0 1rem;
`

export const WrapperBtn = styled(T.layouts.Row)`
  flex-wrap: wrap;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
  justify-content: center;

  & > button {
    margin: 0.5rem;
  }
`

export const Btn = styled(C.Button)`
  border: 0.1rem solid ${T.colors.white};
`

export const IconTwitch = styled(Twitch)``

export const IconGithub = styled(Github)``

export const IconLinkedin = styled(Linkedin)``

export const IconYoutube = styled(Youtube)``

export const IconFacebook = styled(Facebook)``

export const IconInstagram = styled(Instagram)``

export const IconLinks = styled(Links)``
