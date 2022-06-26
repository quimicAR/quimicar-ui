import Link from 'next/link'
import { IconType } from 'react-icons'
import { Text } from '../../../components'

const SidebarButton: React.FC<{
  icon: IconType | JSX.Element
  label: string
  href: string
  onClick?: () => void
  hideLabel?: boolean
  isDarkMode: boolean
}> = ({ icon, label, href, isDarkMode, onClick, hideLabel }) => (
  <Link href={href}>
    <div
      onClick={onClick}
      className={`sidebar-animation flex gap-3 items-center h-12 w-full px-6 cursor-pointer  hover:bg-primary transition-all duration-300 ease-linear group justify-start ${
        isDarkMode && 'bg-gray-900'
      } `}
    >
      {icon}
      {hideLabel ? (
        <span
          className={`ml-5 z-20 sidebar-tooltip group-hover:scale-100  ${
            hideLabel && 'overflow-hidden'
          }`}
        >
          {label}
        </span>
      ) : (
        <Text>{label}</Text>
      )}
    </div>
  </Link>
)

export default SidebarButton
