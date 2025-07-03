import { FC, useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate, useLocation } from 'react-router-dom'

type NavItem = {
  label: string
  path: string
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const Navbar: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()


  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open)

  const handleNavigate = (path: string) => {
    navigate(path)
    setDrawerOpen(false) 
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#0E0E0E',
        color: theme.palette.text.primary,
        boxShadow: 'none',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1200, px: { xs: 2, sm: 3, md: 4 } }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
            <img
              src="src/assets/Flowborne-logo.svg" 
              alt="Logo"
              style={{ height: 40 }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{ sx: { backgroundColor: '#0E0E0E', color: '#F8F3F3' } }}
              >
                <List sx={{ width: 250 }}>
                  {navItems.map(({ label, path }) => (
                    <ListItem
                      key={label}
                      onClick={() => handleNavigate(path)}
                      sx={{ py: 1 }}
                    >
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{
                          sx: isActive(path)
                            ? { color: '#FADF11', fontWeight: 'bold' }
                            : { color: '#F8F3F3' },
                        }}
                      />
                    </ListItem>
                  ))}
                  <ListItem button sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: '#FADF11',
                        color: '#000',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: '#d4c80b' },
                      }}
                      onClick={() => {
                      }}
                    >
                      Get a Quote
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navItems.map(({ label, path }) => (
                <Typography
                  key={label}
                  variant="body1"
                  onClick={() => handleNavigate(path)}
                  sx={{
                    color: isActive(path) ? '#FADF11' : '#F8F3F3',
                    fontWeight: isActive(path) ? 'bold' : 'normal',
                    cursor: 'pointer',
                    userSelect: 'none',
                    '&:hover': {
                      color: '#FADF11',
                    },
                  }}
                >
                  {label}
                </Typography>
              ))}

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FADF11',
                  color: '#000',
                  fontWeight: 'bold',
                  borderRadius: '20px',
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  '&:hover': { backgroundColor: '#d4c80b' },
                }}
                onClick={() => {
                }}
              >
                Get a Quote
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
