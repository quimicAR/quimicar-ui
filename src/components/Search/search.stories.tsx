import Search from './search.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Search',
  component: Search,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Search {...args} />
