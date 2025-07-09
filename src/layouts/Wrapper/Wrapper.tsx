import { FC, useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { styles } from './Wrapper.styles'
import { Navbar } from '~components/Navbar/Navbar'
import { Footer } from '~components/Footer/Footer'

export const Wrapper: FC = () => {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Box sx={styles.root}>
      <Navbar />
      <Box
        component='main'
        sx={{
          ...styles.main,
          backgroundPositionY: `${scrollY * 0.5}px`
        }}
      >
        <Container maxWidth={false} sx={styles.container}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
