import Content from './content.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Content',
  component: Content,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Content {...args} />
