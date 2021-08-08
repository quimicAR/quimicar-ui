import { Text } from '../../components'
import { ReactElement, ReactNode } from 'react'
import * as SC from './section.styles'

interface SectionProps {
  title: string
  icon?: ReactElement | ReactNode
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <SC.SectionContainer>
      <SC.Title>
        {icon}
        <Text size="lg" weight="light">
          {title}
        </Text>
      </SC.Title>
      {children}
    </SC.SectionContainer>
  )
}

export default Section
