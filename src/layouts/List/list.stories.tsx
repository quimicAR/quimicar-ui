import List from './list.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'List',
  component: List,
  argTypes: {}
} as Meta

export const Default: Story = (args) => (
  <List
    title="List Test"
    headers={[{ id: 'name', title: 'Name' }]}
    rows={[{ name: 'Lorem Ipsum' }]}
    onChangeSearch={(search) => console.log(search)}
    handleSearch={() => console.log('Searching...')}
    handleCreate={() => console.log('Create clicked')}
    {...args}
  />
)
