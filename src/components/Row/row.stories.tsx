import Row from './row.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Row',
  component: Row,
  argTypes: {
    title: { control: { type: 'text' } },
    text: { control: { type: 'text' } }
  }
} as Meta

export const Default: Story = (args) => (
  <Row text="Testing text" title="Title" {...args} />
)
