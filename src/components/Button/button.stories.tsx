import Button from './button.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: { control: 'text' },
    color: { control: 'color' },
    isLink: { control: 'boolean' }
  },
  args: {
    label: 'Button',
    onClick: console.log('Clicked'),
    color: 'rgb(57,182,206)'
  }
} as Meta

export const Default: Story = (args) => (
  <Button onClick={() => console.log('Clicked')} label="Button" {...args} />
)
