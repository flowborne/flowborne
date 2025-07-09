import { Box } from '@mui/material'
import { SxProps, Theme } from '@mui/system'
import { styles } from './GradientText.styles'
import { GradientTextProps } from '~types/gradientText'

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  showBorder = false
}) => {
  const gradientStyle: SxProps<Theme> = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  }

  return (
    <Box component='span' sx={{ ...styles.animatedGradientText }}>
      {showBorder && (
        <Box
          sx={{
            ...(styles.gradientOverlay as React.CSSProperties),
            ...gradientStyle
          }}
        />
      )}
      <Box
        component='span'
        sx={{
          ...(styles.textContent as React.CSSProperties),
          ...gradientStyle
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
