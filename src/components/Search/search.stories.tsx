import Search from './search.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Search',
  component: Search,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' }
  },
  args: {
    placeholder: 'Search for elements...',
    value: ''
  }
} as Meta

export const Default: Story = (args) => <Search {...args} />
