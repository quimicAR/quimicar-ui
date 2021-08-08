import Text from './text.component'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xsm', 'sm', 'md', 'lg', 'xlg']
    },
    color: { control: { type: 'color' } },
    weight: {
      control: { type: 'select' },
      options: ['xlight', 'light', 'medium', 'bold']
    },
    text: { control: { type: 'text' } }
  },
  args: {
    text: 'Text Component Example',
    size: 'md',
    weight: 'bold'
  }
} as Meta

export const Default: Story = (args) => <Text {...args} />
