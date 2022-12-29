import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Backdrop, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

function Layout({ children }) {
  const isLoadingGB = useSelector((state) => state.loading.globalLoading)

  return (
    <>
      <Header />
      <div style={{ opacity: isLoadingGB ? 0 : 1 }}>{children}</div>
      <Footer />

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoadingGB}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Layout
