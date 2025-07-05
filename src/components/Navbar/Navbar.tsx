import { FC, useState, useEffect, useRef } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAV_ITEMS, SERVICE_ITEMS } from './Navbar.constants'
import { styles } from './Navbar.styles'
import { NavItem, ServiceSection } from '~types/navbar'

export const Navbar: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false)
  const [servicesDesktopOpen, setServicesDesktopOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const servicesButtonRef = useRef<HTMLSpanElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  const isServiceActive = () =>
    SERVICE_ITEMS.some((section) =>
      section.items.some((item) => isActive(item.path))
    )

  const handleNavigate = (path: string) => {
    navigate(path)
    setDrawerOpen(false)
    setServicesMobileOpen(false)
    setServicesDesktopOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDesktopOpen &&
        sliderRef.current &&
        !sliderRef.current.contains(event.target as Node) &&
        !servicesButtonRef.current?.contains(event.target as Node)
      ) {
        setServicesDesktopOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesDesktopOpen])

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          ...styles.appBar,
          backgroundColor: servicesDesktopOpen
            ? '#0E0E0E'
            : typeof styles.appBar === 'object' &&
                styles.appBar !== null &&
                'backgroundColor' in styles.appBar
              ? ((styles.appBar as { backgroundColor?: string })
                  .backgroundColor ?? '#121212')
              : '#121212',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
          backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}
      >
        <Container maxWidth={false} sx={styles.container}>
          <Toolbar sx={styles.toolbar}>
            <Box onClick={() => handleNavigate('/')} sx={styles.logoBox}>
              <img
                alt='Logo'
                src='src/assets/Flowborne-logo.svg'
                style={{ height: 40 }}
              />
            </Box>

            {isMobile ? (
              <>
                <IconButton
                  color='inherit'
                  onClick={() => setDrawerOpen(true)}
                  sx={styles.burgerIcon}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  PaperProps={{ sx: styles.drawerPaper }}
                  anchor='right'
                  onClose={() => setDrawerOpen(false)}
                  open={drawerOpen}
                >
                  <List sx={styles.drawerList}>
                    <ListItem onClick={() => handleNavigate('/')}>
                      <ListItemText
                        primary={t('nav.home')}
                        primaryTypographyProps={{
                          sx: { color: isActive('/') ? '#FADF11' : '#F8F3F3' }
                        }}
                      />
                    </ListItem>

                    <ListItem
                      onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                    >
                      <ListItemText
                        primary={t('Services')}
                        primaryTypographyProps={{
                          sx: {
                            color: isServiceActive() ? '#FADF11' : '#F8F3F3'
                          }
                        }}
                      />
                      {servicesMobileOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse
                      in={servicesMobileOpen}
                      timeout='auto'
                      unmountOnExit
                    >
                      <List component='div' disablePadding>
                        {SERVICE_ITEMS.map((section: ServiceSection) => (
                          <Box key={section.category}>
                            <ListItemText
                              primary={t(section.category)}
                              primaryTypographyProps={{
                                sx: {
                                  pl: 2,
                                  color: '#F8F3F3',
                                  fontWeight: 'bold'
                                }
                              }}
                            />
                            {section.items.map((item) => (
                              <ListItem
                                key={item.label}
                                onClick={() => handleNavigate(item.path)}
                                sx={{
                                  ...styles.drawerSubItem,
                                  cursor: 'pointer',
                                  '&:hover': { color: '#FADF11' }
                                }}
                              >
                                <ListItemText
                                  primary={t(item.label)}
                                  primaryTypographyProps={{
                                    sx: { color: '#F8F3F3' }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </Box>
                        ))}
                      </List>
                    </Collapse>

                    {NAV_ITEMS.filter((item) => item.path !== '/').map(
                      (item: NavItem) => (
                        <ListItem
                          key={item.label}
                          onClick={() => handleNavigate(item.path)}
                        >
                          <ListItemText
                            primary={t(item.label)}
                            primaryTypographyProps={{
                              sx: {
                                color: isActive(item.path)
                                  ? '#FADF11'
                                  : '#F8F3F3'
                              }
                            }}
                          />
                        </ListItem>
                      )
                    )}

                    <ListItem sx={{ mt: 2 }}>
                      <Button
                        color='secondary'
                        fullWidth
                        onClick={() => handleNavigate('/contact')}
                        sx={styles.quoteButton}
                        variant='contained'
                      >
                        {t('Get a Quote')}
                      </Button>
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : (
              <Box sx={styles.navLinksBox}>
                <Typography
                  data-text={t('nav.home')}
                  onClick={() => handleNavigate('/')}
                  sx={{
                    ...styles.navLink,
                    color: isActive('/') ? '#FADF11' : '#F8F3F3'
                  }}
                >
                  {t('nav.home')}
                </Typography>

                <Typography
                  data-text={t('Services')}
                  onClick={() => setServicesDesktopOpen(!servicesDesktopOpen)}
                  ref={servicesButtonRef}
                  sx={{
                    ...styles.navLink,
                    color:
                      servicesDesktopOpen || isServiceActive()
                        ? '#FADF11'
                        : '#F8F3F3'
                  }}
                >
                  {t('Services')}
                </Typography>

                {NAV_ITEMS.filter((item) => item.path !== '/').map(
                  (item: NavItem) => (
                    <Typography
                      data-text={t(item.label)}
                      key={item.label}
                      onClick={() => handleNavigate(item.path)}
                      sx={{
                        ...styles.navLink,
                        color: isActive(item.path) ? '#FADF11' : '#F8F3F3'
                      }}
                    >
                      {t(item.label)}
                    </Typography>
                  )
                )}
              </Box>
            )}

            {!isMobile && (
              <Button
                color='secondary'
                onClick={() => handleNavigate('/contact')}
                sx={styles.quoteButton}
                variant='contained'
              >
                {t('Get a Quote')}
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {!isMobile && servicesDesktopOpen && (
        <Box ref={sliderRef} sx={styles.servicesSlider}>
          {SERVICE_ITEMS.map((section: ServiceSection) => (
            <Box key={section.category}>
              <Typography sx={styles.sliderCategory}>
                {t(section.category)}
              </Typography>
              {section.items.map((item) => (
                <Box
                  key={item.label}
                  onClick={() => handleNavigate(item.path)}
                  sx={styles.sliderItem}
                >
                  <Typography fontWeight='bold'>{t(item.label)}</Typography>
                  <Typography variant='body2'>{t(item.description)}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}
