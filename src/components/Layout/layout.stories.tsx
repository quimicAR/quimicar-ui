import Layout from './layout.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Layout',
  component: Layout,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Layout {...args} />
