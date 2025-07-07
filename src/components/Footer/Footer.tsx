import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
  Divider,
  Stack,
  TextField,
  useTheme
} from '@mui/material'
import {
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  GitHub as GitHubIcon,
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

import FlowborneLogo from '~assets/Flowborne-logo.svg'
import DiscordLogo from '~assets/discord.svg'
import { styles } from './Footer.styles'
import { BOTTOM_LINKS, COMPANY, SERVICES } from './Footer.constants'

export const Footer: React.FC = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Box component='footer' sx={styles.footer}>
      <Container maxWidth={false} sx={styles.container}>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Box display='flex' flexDirection='column' gap={2}>
              <Box alignItems='center' display='flex' gap={1}>
                <Box
                  alt={t('footer.title')}
                  component='img'
                  src={FlowborneLogo}
                  sx={styles.logoImg}
                />
                <Typography sx={styles.titleH6} variant='h6'>
                  {t('footer.title')}
                </Typography>
              </Box>
              <Typography sx={styles.description} variant='body2'>
                {t('footer.description')}
              </Typography>
              <Stack direction='row' spacing={1}>
                <IconButton sx={styles.iconButton}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={styles.iconButton}>
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  aria-label={t('footer.social.altDiscord')}
                  sx={styles.iconButton}
                >
                  <Box
                    alt={t('footer.social.altDiscord')}
                    component='img'
                    src={DiscordLogo}
                    sx={{ width: 20, height: 20 }}
                  />
                </IconButton>
                <IconButton sx={styles.iconButton}>
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          <Grid item md={2} sm={6} xs={12}>
            <Typography sx={styles.subtitle} variant='subtitle1'>
              {t('footer.sections.services')}
            </Typography>
            <Stack spacing={0.5}>
              {SERVICES.map(({ key, href }) => (
                <Link href={href} key={key} sx={styles.link} underline='none'>
                  {t(`footer.services.${key}`)}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item md={2} sm={6} xs={12}>
            <Typography sx={styles.subtitle} variant='subtitle1'>
              {t('footer.sections.company')}
            </Typography>
            <Stack spacing={0.5}>
              {COMPANY.map(({ key, href }) => (
                <Link href={href} key={key} sx={styles.link} underline='none'>
                  {t(`footer.company.${key}`)}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography sx={styles.subtitle} variant='subtitle1'>
              {t('footer.sections.getInTouch')}
            </Typography>
            <Box alignItems='center' display='flex' mb={1}>
              <PhoneIcon
                fontSize='small'
                sx={{ color: theme.palette.common.white }}
              />
              <Typography
                sx={{ ml: 1, color: theme.palette.common.white }}
                variant='body2'
              >
                {t('footer.contact.phone')}
              </Typography>
            </Box>
            <Typography sx={styles.getInTouchCaption}>
              {t('footer.contact.available24_7')}
            </Typography>
            <Box alignItems='center' display='flex' mt={1}>
              <EmailIcon
                fontSize='small'
                sx={{ color: theme.palette.common.white }}
              />
              <Link
                href={`mailto:${t('footer.contact.emailPrimary')}`}
                sx={styles.emailLink}
                underline='none'
              >
                {t('footer.contact.emailPrimary')}
              </Link>
            </Box>
            <Typography sx={styles.getInTouchCaption}>
              {t('footer.contact.emailSecondary')}
            </Typography>
          </Grid>

          <Grid item md={2} sm={6} xs={12}>
            <Typography sx={styles.newsletterTitle} variant='subtitle1'>
              {t('footer.sections.newsletter')}
            </Typography>
            <Typography sx={styles.newsletterText} variant='body2'>
              {t('footer.newsletter.text')}
            </Typography>
            <Box component='form' sx={styles.newsletterForm}>
              <TextField
                fullWidth
                placeholder={t('footer.newsletter.placeholder')}
                size='small'
                sx={styles.emailField}
                variant='outlined'
              />
              <Button size='small' sx={styles.subscribeButton}>
                {t('footer.newsletter.subscribe')}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={styles.divider} />

        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
          <Typography sx={styles.bottomText} variant='body2'>
            {t('footer.bottom.copyright')}
          </Typography>
          <Stack direction='row' spacing={2}>
            {BOTTOM_LINKS.map(({ key, href }) => (
              <Link
                href={href}
                key={key}
                sx={styles.bottomLink}
                underline='none'
              >
                {t(`footer.bottom.${key}`)}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
