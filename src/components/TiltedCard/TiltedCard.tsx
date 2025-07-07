import React, { useRef, useState } from 'react'
import type { SpringOptions } from 'framer-motion'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Box } from '@mui/material'
import { styles } from './TiltedCard.styles'
import { TiltedCardProps } from '~types/tiltedCard'

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '100%',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}) => {
  const ref = useRef<HTMLElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  })

  const [lastY, setLastY] = useState(0)

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude)
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude)
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    rotateFigcaption.set(-velocityY * 0.6)
    setLastY(offsetY)
  }

  const handleMouseEnter = () => {
    scale.set(scaleOnHover)
    opacity.set(1)
  }

  const handleMouseLeave = () => {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    <Box
      component='figure'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouse}
      ref={ref}
      sx={{
        ...styles.figure,
        height: containerHeight,
        width: containerWidth
      }}
    >
      {showMobileWarning && (
        <Box sx={styles.mobileAlert}>
          This effect is not optimized for mobile. Check on desktop.
        </Box>
      )}

      <Box
        component={motion.div}
        style={{ rotateX, rotateY, scale }}
        sx={{
          ...styles.inner,
          width: imageWidth,
          height: imageHeight
        }}
      >
        <Box
          alt={altText}
          component={motion.img}
          src={''}
          sx={{
            ...styles.img,
            width: imageWidth,
            height: imageHeight
          }}
        />

        {displayOverlayContent && overlayContent && (
          <Box component={motion.div} sx={styles.overlay}>
            {overlayContent}
          </Box>
        )}
      </Box>

      {showTooltip && (
        <Box
          component={motion.figcaption}
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
          sx={styles.caption}
        >
          {captionText}
        </Box>
      )}
    </Box>
  )
}
