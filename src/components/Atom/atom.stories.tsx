import Atom from './atom.component'
import { Story, Meta } from '@storybook/react/types-6-0'

// titulo e componente que vão aparecer na dashboard
export default {
  title: 'Atom',
  component: Atom,
  argTypes: {
    atomSymbol: { control: 'text' },
    atomName: { control: 'text' },
    atomicNumber: { control: 'number' },
    atomGroup: {
      control: { type: 'select' },
      options: [
        'nobleGases',
        'alkaliMetals',
        'alkalineEarthMetals',
        'postTransitionMetals',
        'transitionMetals',
        'lanthanoids',
        'actinoids',
        'nonMetal'
      ]
    },
    size: {
      control: { type: 'select' },
      options: ['xsm', 'sm', 'md', 'lg']
    }
  },
  args: {
    atomSymbol: 'H',
    atomicNumber: 1,
    atomName: 'Hydrogen',
    atomGroup: 'nonMetal',
    size: 'md'
  }
} as Meta

export const Default: Story = (args) => (
  <Atom
    atomGroup="nonMetal"
    atomName="Hydrogen"
    atomicNumber={1}
    atomSymbol="H"
    position={{ xPos: 1, yPos: 1 }}
    {...args}
  />
)
