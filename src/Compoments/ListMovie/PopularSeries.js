import React from 'react'
import getTvSeriesPopular from '../../api/getTvSeriesPopular'
import TitleHome from '../../UI/TitleHome'
import AutoSwiper from '../../UI/AutoSwiper'
import { SwiperSlide } from 'swiper/react'
import MovieItem from '../../UI/MovieItem'

function PopularSeries() {
  const data = getTvSeriesPopular()
  return (
    <div>
      <div className="py-4">
        <TitleHome title="Popular Series" />
      </div>
      <AutoSwiper perView={4}>
        {data?.results?.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieItem movie={movie} />
            </SwiperSlide>
          )
        })}
      </AutoSwiper>
    </div>
  )
}

export default PopularSeries
