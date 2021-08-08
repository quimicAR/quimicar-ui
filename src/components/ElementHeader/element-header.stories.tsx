import ElementHeader from './element-header.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'ElementHeader',
  component: ElementHeader,
  argTypes: {}
} as Meta

export const Default: Story = (args) => (
  <ElementHeader
    category="nonMetal"
    atomic_mass={1.0}
    element_img="https://upload.wikimedia.org/wikipedia/commons/8/83/Hydrogen_discharge_tube.jpg"
    name="Hydrogen"
    number={1}
    symbol="H"
    {...args}
  />
)
