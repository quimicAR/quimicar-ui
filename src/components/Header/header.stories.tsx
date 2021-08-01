import Header from './header.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// Header da página inicial
export default {
  title: 'Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    theme: { control: { type: 'radio', options: ['light', 'dark'] } }
  },
  args: {
    title: 'quimicAR',
    theme: 'light'
  }
} as Meta

export const Default: Story = (args) => <Header {...args} />

export const Dark = Default.bind({})
Dark.args = {
  theme: 'dark',
  title: 'quimicAR'
}

export const Light = Default.bind({})
Light.args = {
  theme: 'light',
  title: 'quimicAR'
}
