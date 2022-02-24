import Input from './input.component'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FiUser } from 'react-icons/fi'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: { control: { type: 'select' }, options: ['text', 'password'] },
    icon: { control: { type: 'select' }, options: [{ user: FiUser }] }
  },
  args: {
    type: 'text',
    placeholder: 'Text input',
    value: ''
  }
} as Meta

export const Text: Story = (args) => (
  <Input onChange={() => console.log('test')} type="text" {...args} />
)

export const Password: Story = (args) => (
  <Input
    onChange={() => console.log('test')}
    {...args}
    type="password"
    placeholder="Password input"
  />
)
