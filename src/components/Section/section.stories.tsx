import Section from './section.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Section',
  component: Section,
  argTypes: {}
} as Meta

export const Default: Story = (args) => (
  <Section title="Title section" {...args} />
)
