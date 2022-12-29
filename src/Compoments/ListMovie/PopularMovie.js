import React from 'react'
import { SwiperSlide } from 'swiper/react'
import getMoviePopular from '../../api/getMoviePopular'
import AutoSwiper from '../../UI/AutoSwiper'
import MovieItem from '../../UI/MovieItem'
import TitleHome from '../../UI/TitleHome'

function PopularMovie() {
  const data = getMoviePopular()

  return (
    <div>
      <div className="py-4">
        <TitleHome title="Popular Movie" />
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

export default PopularMovie
