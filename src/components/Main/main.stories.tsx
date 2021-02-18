import Main from './main.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' }
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
