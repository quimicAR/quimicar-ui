import PeriodicTable from './periodic-table.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'PeriodicTable',
  component: PeriodicTable,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <PeriodicTable {...args} />
