import Header from './header.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// Header da página inicial
export default {
  title: 'Header',
  component: Header,
  argTypes: {
    title: { control: 'text' }
  },
  args: {
    title: 'quimicAR'
  }
} as Meta

export const Default: Story = (args) => <Header {...args} />
