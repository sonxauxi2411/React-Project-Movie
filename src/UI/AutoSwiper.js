import React from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'

function AutoSwiper({ children, perView }) {
  return (
    <Swiper
      loop={true}
      className="mySwiper"
      watchSlidesProgress={true}
      slidesPerView={perView}
      style={{ width: '100%', height: 'max-content' }}
    >
      {children}
    </Swiper>
  )
}

export default AutoSwiper
