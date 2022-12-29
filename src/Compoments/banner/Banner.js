import React from 'react'
import getTreningMovies from '../../api/getTreningMovies'
import AutoSwiper from '../../UI/AutoSwiper'
import SliderBanner from './SliderBanner'
import { SwiperSlide } from 'swiper/react'

function Banner({ data }) {
  // const data = getTreningMovies()
  // console.log(data)
  return (
    <AutoSwiper>
      {data?.results?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <SliderBanner onMovie={movie} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  )
}

export default Banner
