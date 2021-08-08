import Modal from './modal.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Modal',
  component: Modal,
  argTypes: {}
} as Meta

export const Default: Story = (args) => <Modal open={true} {...args} />
