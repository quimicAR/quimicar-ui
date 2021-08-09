import { Text } from '../../components'
import { ReactElement, ReactNode } from 'react'
import Image from 'next/image'
import * as SC from './row.styles'

interface RowProps {
  text?: string | number
  title: string
  icon?: ReactElement | ReactNode
  imageUrl?: string
  measure?: string
  alt?: string
  imgHeight?: string | number
  imgWidth?: string | number
}

const Row: React.FC<RowProps> = ({
  text,
  title,
  icon,
  measure,
  imageUrl,
  alt,
  imgHeight,
  imgWidth
}) => {
  return (
    <SC.RowContainer>
      <Text size="md" weight="bold" color="#818181">
        {icon}
        {title}
      </Text>
      <div style={{ display: 'flex' }}>
        <Text size="lg" weight="light" color={text ? '' : '#868686'}>
          {text !== null ? text : '-'}
        </Text>
        <div style={{ marginRight: '6px' }} />
        <Text size="lg" weight="light" color="#868686">
          {text ? measure : ''}
        </Text>
      </div>

      {imageUrl && imgHeight && (
        <Image
          src={imageUrl}
          alt={alt}
          width={imgWidth || 'auto'}
          height={imgHeight}
        />
      )}
    </SC.RowContainer>
  )
}

export default Row
