import { Story } from '@storybook/react'
import { Eye } from '@styled-icons/ionicons-outline'
import styled from 'styled-components'
import Button, { BtnProps } from '.'

const WrapperBtn = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

export const Template: Story<BtnProps> = args => (
  <WrapperBtn>
    <Button {...args} />
    <Button {...args} icon={<Eye />} />
    <Button {...args} text="" icon={<Eye />} />
    <Button {...args} text="" icon={<Eye />} />
    <Button {...args} text="" icon={<Eye />} />
    <Button {...args} text="" icon={<Eye />} />
  </WrapperBtn>
)

export const Default = Template.bind({})
