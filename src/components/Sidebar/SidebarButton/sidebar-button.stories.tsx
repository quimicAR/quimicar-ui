import SidebarButton from './sidebar-button.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'SidebarButton',
  component: SidebarButton,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <SidebarButton {...args} />
