import { useRef } from 'react'
import { Box } from '@mui/material'
import { styles } from './SpotlightCard.styles'
import { SpotlightCardProps } from '~types/spotlightCard'

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)'
}) => {
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const x = `${e.clientX - rect.left}px`
    const y = `${e.clientY - rect.top}px`
    divRef.current.style.setProperty('--mouse-x', x)
    divRef.current.style.setProperty('--mouse-y', y)
    divRef.current.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <Box
      className={className}
      onMouseMove={handleMouseMove}
      ref={divRef}
      sx={styles.cardSpotlight}
    >
      {children}
    </Box>
  )
}
