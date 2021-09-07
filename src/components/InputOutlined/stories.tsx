import { Story } from '@storybook/react'
import { Mail, LockClosed } from '@styled-icons/ionicons-outline'
import styled from 'styled-components'
import T from 'theme'
import InputOutlined, { InputOutlinedProps } from '.'

const WrapperInput = styled.div`
  display: flex;
  padding: 3rem 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 1.5rem 0.1rem rgb(62 57 107 / 7%);
  background-color: ${T.colors.light};
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 45rem;
  flex-flow: wrap;
  margin: 0 auto;
`

const IconMail = styled(Mail)``
const IconLock = styled(LockClosed)``

const Template: Story<InputOutlinedProps> = args => (
  <WrapperInput>
    <InputOutlined {...args} id="zero" disabled={true} />
    <InputOutlined {...args} id="one" />
    <InputOutlined {...args} id="two" icon={<IconMail />} />
    <InputOutlined {...args} id="three" icon={<IconMail />} />
    <InputOutlined {...args} id="four" icon={<IconLock />} disabled={true} />
  </WrapperInput>
)

export const Default = Template.bind({})
