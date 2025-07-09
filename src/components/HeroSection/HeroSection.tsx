import {
  Box,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { GradientText } from '~components/GradientText/GradientText'
import { styles } from './HeroSection.styles'
import { useNavigate } from 'react-router-dom'
import { HeroSectionProps } from '~types/heroSection'

export const HeroSection = ({
  titleStart,
  titleHighlight,
  titleEnd,
  subtitle,
  showButtons = false,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}: HeroSectionProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  return (
    <Box sx={styles.heroWrapper}>
      <Box sx={styles.container}>
        <Typography
          component='h1'
          sx={styles.heroTitle}
          variant={isMobile ? 'h4' : 'h3'}
        >
          <Box component='span' sx={{ display: 'inline' }}>
            {titleStart}{' '}
          </Box>
          <GradientText
            animationSpeed={15}
            colors={[
              '#FADF11',
              '#83758F',
              '#1E1BF9',
              '#FADF11',
              '#83758F',
              '#1E1BF9'
            ]}
            showBorder={false}
          >
            {titleHighlight}
          </GradientText>
          <Box component='span' sx={{ display: 'inline' }}>
            {' '}
            {titleEnd}
          </Box>
        </Typography>

        <Typography sx={styles.heroSubtitle} variant='body1'>
          {subtitle}
        </Typography>

        {showButtons && (
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={5}
            sx={styles.heroButtons}
          >
            {primaryButtonText && (
              <Button
                color='primary'
                fullWidth={isMobile}
                onClick={onPrimaryClick ?? (() => navigate('/contact'))}
                sx={{ minWidth: { xs: 'auto', sm: 300 } }}
                variant='contained'
              >
                {primaryButtonText}
              </Button>
            )}

            {secondaryButtonText && (
              <Button
                color='primary'
                fullWidth={isMobile}
                onClick={onSecondaryClick ?? (() => navigate('/case-studies'))}
                sx={{ minWidth: { xs: 'auto', sm: 300 } }}
                variant='outlined'
              >
                {secondaryButtonText}
              </Button>
            )}
          </Stack>
        )}
      </Box>
    </Box>
  )
}
