'use client'

import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      className={`fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 ${overlayClassName}`}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
        className={`bg-white rounded-lg w-full ${maxWidthClassName} ${paddingClassName} max-h-[90vh] overflow-y-auto relative shadow-2xl modal-scrollbar ${contentClassName}`}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
