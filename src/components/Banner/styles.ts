import { Discord } from '@styled-icons/remix-line'
import styled from 'styled-components'
import T from 'theme'
import Button from 'components/Button'

export const Wrapper = styled(T.layouts.Row)`
  min-height: calc(100vh - 5rem);
  background-image: linear-gradient(165deg, #111827 65%, #13171f 0%);
  padding: 2rem 0;

  ${T.breakPoint(T.devices.md)} {
    min-height: calc(100vh - 10rem);
  }
`

export const Container = styled(T.layouts.Container)`
  display: grid;
  grid-template-columns: 1fr;

  ${T.breakPoint(T.devices.sm)} {
    column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  ${T.breakPoint(T.devices.md)} {
    column-gap: 10rem;
  }

  ${T.breakPoint(T.devices.lg)} {
    column-gap: 22rem;
  }
`

export const ContentText = styled(T.layouts.Col)`
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${T.colors.primary};
  font-weight: ${T.typography.weight.bold};
  line-height: 1.2;
  font-size: ${T.typography.sizes.title3};
  text-align: center;
  opacity: 0;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out forwards,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;

  ${T.breakPoint(T.devices.xs)} {
    text-align: left;
  }

  ${T.breakPoint(T.devices.md)} {
    font-size: ${T.typography.sizes.title2};
  }
`

export const P = styled.p`
  opacity: 0;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out forwards,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;
  padding-top: 3rem;
  color: ${T.colors.white};
  font-size: ${T.typography.sizes.subtitle4};
  text-align: center;

  ${T.breakPoint(T.devices.xs)} {
    text-align: left;
  }
`

export const BtnBanner = styled(Button)`
  margin-top: 3rem;
  opacity: 0;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out forwards,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;
`

export const IconDiscord = styled(Discord)``

export const WrapperImgBanner = styled(T.layouts.Col)`
  min-height: 10rem;
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`

export const Img = styled.img`
  width: 80%;
  ${T.breakPoint(T.devices.sm)} {
    width: 100%;
  }
  opacity: 0;
  animation: ${T.animations.fadeIn} 0.5s ease-in-out forwards,
    ${T.animations.move('0', '50px', '0')} 0.5s ease-in-out;
`
