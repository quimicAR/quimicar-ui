import Admin from './admin.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Admin',
  component: Admin,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Admin {...args} />
