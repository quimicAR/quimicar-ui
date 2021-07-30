import Header from './header.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Header',
  component: Header,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Header {...args} />
