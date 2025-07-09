import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { styles } from './CoreValueCard.styles'
import { CoreValueCardProps } from '~types/coreValueCard'

export const CoreValueCard = ({
  image,
  title,
  description,
  delay = 0
}: CoreValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Box sx={styles.cardWrapper}>
        <Box sx={styles.iconWrapper}>
          <img
            alt={title}
            src={image}
            style={styles.iconImage as React.CSSProperties}
          />
        </Box>

        <Typography color='text.secondary' fontWeight='bold' variant='h6'>
          {title}
        </Typography>

        <Typography color='text.secondary' variant='body2'>
          {description}
        </Typography>
      </Box>
    </motion.div>
  )
}
