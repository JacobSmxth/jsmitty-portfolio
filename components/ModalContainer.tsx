'use client'

import { ReactNode } from 'react'
import { useLockBodyScroll } from '@/hooks'

interface ModalContainerProps {
  children: ReactNode
  onClose: () => void
  overlayClassName?: string
  contentClassName?: string
  maxWidthClassName?: string
  paddingClassName?: string
}

export default function ModalContainer({
  children,
  onClose,
  overlayClassName = '',
  contentClassName = '',
  maxWidthClassName = 'max-w-3xl',
  paddingClassName = 'p-10'
}: ModalContainerProps) {
  useLockBodyScroll()

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 animate-fadeIn ${overlayClassName}`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`bg-white rounded-lg w-full ${maxWidthClassName} ${paddingClassName} max-h-[90vh] overflow-y-auto relative shadow-2xl modal-scrollbar animate-scaleIn ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
