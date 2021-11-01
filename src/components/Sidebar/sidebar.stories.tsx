import Sidebar from './sidebar.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Sidebar {...args} />
