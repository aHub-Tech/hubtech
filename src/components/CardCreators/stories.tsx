import { Story } from '@storybook/react'
import CardCreators, { CardCreatorsProps } from '.'
import { mockCardCreators } from 'components/CardCreators/mock'

const Template: Story<CardCreatorsProps> = args => <CardCreators {...args} />

export const Default = Template.bind({})
Default.args = mockCardCreators[0]

export const Default2 = Template.bind({})
Default2.args = mockCardCreators[1]

export const Default3 = Template.bind({})
Default3.args = mockCardCreators[2]
