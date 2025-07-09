import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './ReadyToAccelerate.styles'
import { useNavigate } from 'react-router-dom'
import { SxProps, Theme } from '@mui/system'
import { ReadyToAccelerateProps } from '~types/readyToAccelerate'

const wrapperStyles = (isBlue: boolean): SxProps<Theme> =>
  ({
    ...styles.ctaWrapper,
    ...(isBlue ? styles.blueBg : styles.transparentBg)
  }) as SxProps<Theme>

export const ReadyToAccelerate = ({
  isBlue = false
}: ReadyToAccelerateProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <Box sx={wrapperStyles(isBlue)}>
      <Box sx={styles.container}>
        <Typography sx={styles.ctaTitle}>{t('cta.title')}</Typography>

        <Typography sx={styles.ctaSubtitle}>{t('cta.subtitle')}</Typography>

        <Stack sx={styles.ctaButtons}>
          <Button
            color='primary'
            fullWidth={isMobile}
            onClick={() => handleNavigate('/contact')}
            sx={{ minWidth: { xs: 'auto', sm: 300 } }}
            variant='contained'
          >
            {t('cta.primaryButton')}
          </Button>
          <Button
            color='primary'
            fullWidth={isMobile}
            onClick={() => handleNavigate('/case-studies')}
            sx={{ minWidth: { xs: 'auto', sm: 300 } }}
            variant='outlined'
          >
            {t('cta.secondaryButton')}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
