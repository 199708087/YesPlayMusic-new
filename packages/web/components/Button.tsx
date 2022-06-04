import { ReactNode } from 'react'
import { cx } from '@emotion/css'

export enum Color {
  Primary = 'primary',
  Gray = 'gray',
}

export enum Shape {
  Default = 'default',
  Square = 'square',
}

const Button = ({
  children,
  onClick,
  color = Color.Primary,
  iconColor = Color.Primary,
  isSkelton = false,
}: {
  children: ReactNode
  onClick: () => void
  color?: Color
  iconColor?: Color
  isSkelton?: boolean
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'btn-pressed-animation flex cursor-default items-center rounded-20  px-4 py-1.5 text-lg font-medium',
        {
          'bg-brand-100 dark:bg-brand-600': color === Color.Primary,
          'text-brand-500 dark:text-white': iconColor === Color.Primary,
          'bg-gray-100 dark:bg-gray-700': color === Color.Gray,
          'text-gray-600 dark:text-gray-400': iconColor === Color.Gray,
          'animate-pulse bg-gray-100 !text-transparent dark:bg-gray-800':
            isSkelton,
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
