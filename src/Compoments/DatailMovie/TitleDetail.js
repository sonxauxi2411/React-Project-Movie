import React from 'react'
import getDetail from '../../api/getDetail'
import { bgBanner, bgPoster, bgPosterDetail } from '../../assets/Images'
import AvgMovie from '../../UI/AvgMovie'
import TitleGenres from '../../UI/TitleGenres'
import getCastMovie from '../../api/getCastMovie'
import AutoSwiper from '../../UI/AutoSwiper'
import { SwiperSlide } from 'swiper/react'
import style from './TitleDetail.module.scss'
import PersonItem from '../ListPerson/PersonItem'
import TitleHome from '../../UI/TitleHome'

function TitleDetail({ data }) {
  const avg = data?.vote_average
  const genres = data?.genres
  const id = data?.id
  const castMovie = getCastMovie(id, 'movie')
  const casts = castMovie?.cast
  console.log(casts)
  return (
    <>
      <div
        style={bgBanner(data?.backdrop_path)}
        className={style.wrapper}
      ></div>
      <div className="container">
        <div className={` row ${style.header} `}>
          <div className="col-4" style={{ width: '40%' }}>
            <div style={bgPosterDetail(data?.poster_path)}></div>
          </div>
          <div className={`col-6 ${style?.title_movie}`}>
            <h1> {data.title}</h1>
            <div className="d-flex  w-75">
              <AvgMovie avg={avg} />
              <div className="d-flex">
                <TitleGenres genres={genres} banner />
              </div>
            </div>
            <div>
              <p>{data?.overview}</p>
            </div>
            <div>
              <button>watch now</button>
            </div>
            <div>
              <TitleHome title="Cast" />
              <div className="mt-4">
                <AutoSwiper perView={4} cast>
                  {casts?.map((cast) => {
                    return (
                      <SwiperSlide key={cast.id}>
                        <PersonItem person={cast} />
                      </SwiperSlide>
                    )
                  })}
                </AutoSwiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleDetail
