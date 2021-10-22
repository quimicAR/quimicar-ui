import Base from './base.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Base',
  component: Base,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Base {...args} />
