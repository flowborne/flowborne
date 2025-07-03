import { FC } from 'react'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { styles } from './Wrapper.styles'
import { Navbar } from '~components/Navbar/Navbar'

export const Wrapper: FC = () => {
  return (
    <Box sx={styles.root}>
      <Navbar />
      <Box component="main" sx={styles.main}>
        <Container maxWidth={false} sx={styles.container}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
