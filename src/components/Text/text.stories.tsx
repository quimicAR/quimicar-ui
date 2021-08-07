import Text from './text.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Text',
  component: Text,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Text {...args} />
