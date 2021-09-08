import { Story } from '@storybook/react'
import Title, { TitleProps } from '.'

const Template: Story<TitleProps> = args => <Title {...args} />

export const Default = Template.bind({})
