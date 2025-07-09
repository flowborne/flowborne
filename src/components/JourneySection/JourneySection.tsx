import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Logo from '~assets/Flowborne-logo.svg'
import { styles } from './JourneySection.styles'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const JourneySection = () => {
  const { t } = useTranslation()
  const controls = useAnimation()

  useEffect(() => {
    const animateLogo = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 40,
          damping: 18,
          delay: 0.3
        }
      })
      controls.start({
        y: [0, -4, 2, 0],
        rotate: [0, 1, -1, 0],
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }
      })
    }

    animateLogo()
  }, [controls])

  return (
    <Box sx={styles.journeySection}>
      <Box sx={styles.container}>
        <Box sx={styles.journeyContent}>
          <Box sx={styles.journeyText}>
            <Typography sx={styles.journeyTitle} variant='h5'>
              {t('aboutUs.journey.title')}
            </Typography>
            <Typography sx={styles.journeyParagraph}>
              {t('aboutUs.journey.test1')}
            </Typography>
            <Typography sx={styles.journeyParagraph}>
              {t('aboutUs.journey.test2')}
            </Typography>
            <Typography sx={styles.journeyParagraph}>
              {t('aboutUs.journey.test3')}
            </Typography>
          </Box>

          <Box sx={styles.journeyImageWrapper}>
            <motion.img
              alt='Flowborne logo'
              animate={controls}
              initial={{ opacity: 0, scale: 0.5, rotate: -180, y: 100 }}
              src={Logo}
              style={{ width: '700px', height: 'auto' }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
