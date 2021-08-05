import Atom from './atom.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Atom',
  component: Atom,
  argTypes: {
    atomSymbol: { control: 'text' },
    atomName: { control: 'text' },
    atomicNumber: { control: 'number' }
  },
  args: {
    atomSymbol: 'H',
    atomicNumber: 1,
    atomName: 'Hydrogen'
  }
} as Meta

export const Default: Story = (args) => <Atom {...args} />
