import User from './user.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'User',
  component: User,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <User {...args} />
