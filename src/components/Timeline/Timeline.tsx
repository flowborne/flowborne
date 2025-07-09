import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styles } from './Timeline.styles'
import { TIMELINEEVENTS } from './Timeline.constants'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const Timeline = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={styles.timelineWrapper}>
      <Box sx={styles.verticalLine} />
      {TIMELINEEVENTS.map((event, index) => {
        const AnimatedCard = (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Box sx={styles.card}>
              <Typography sx={styles.cardTitle}>{t(event.titleKey)}</Typography>
              <Typography sx={styles.cardText}>
                {t(event.descriptionKey)}
              </Typography>
            </Box>
          </motion.div>
        )

        const AnimatedDate = (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Box sx={styles.dateBadge}>{t(event.dateKey)}</Box>
          </motion.div>
        )

        return (
          <Box key={index} sx={styles.timelineRow}>
            {isMobile ? (
              <>
                <Box sx={styles.mobileDateWrapper}>{AnimatedDate}</Box>
                <Box sx={styles.timelineColumnFull}>{AnimatedCard}</Box>
              </>
            ) : (
              <>
                <Box sx={styles.timelineColumn}>
                  {event.side === 'left' && (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <Box sx={{ ...styles.card, ml: 'auto' }}>
                        <Typography sx={styles.cardTitle}>
                          {t(event.titleKey)}
                        </Typography>
                        <Typography sx={styles.cardText}>
                          {t(event.descriptionKey)}
                        </Typography>
                      </Box>
                    </motion.div>
                  )}
                </Box>

                <Box sx={styles.timelineCenter}>{AnimatedDate}</Box>

                <Box sx={styles.timelineColumn}>
                  {event.side === 'right' && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <Box sx={{ ...styles.card, mr: 'auto' }}>
                        <Typography sx={styles.cardTitle}>
                          {t(event.titleKey)}
                        </Typography>
                        <Typography sx={styles.cardText}>
                          {t(event.descriptionKey)}
                        </Typography>
                      </Box>
                    </motion.div>
                  )}
                </Box>
              </>
            )}
          </Box>
        )
      })}
    </Box>
  )
}
