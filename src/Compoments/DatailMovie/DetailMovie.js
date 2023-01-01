import React from 'react'
import getDetail from '../../api/getDetail'
import { bgBanner, bgPoster, bgPosterDetail } from '../../assets/Images'
import style from './DetailMovie.module.scss'
import AvgMovie from '../../UI/AvgMovie'
import TitleGenres from '../../UI/TitleGenres'
import getCastMovie from '../../api/getCastMovie'
import AutoSwiper from '../../UI/AutoSwiper'
import TitleDetail from './TitleDetail'

function DetailMovie({ id }) {
  const data = getDetail(id, 'movie')
  // const avg = data?.vote_average
  // const genres = data?.genres
  // const castMovie = getCastMovie(id, 'movie')
  // const cast = castMovie?.cast
  // console.log(cast)

  return (
    <>
      {/* <div
        style={bgBanner(data?.backdrop_path)}
        className={style.wrapper}
      ></div>
      <div className="container">
        <div className={` row ${style.header} `}>
          <div className="col-4" style={{ width: '40%' }}>
            <div style={bgPosterDetail(data?.poster_path)}></div>
          </div>
          <div className={`col ${style?.title_movie}`}>
            <h2> {data.title}</h2>
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
         
          </div>
        </div>
      </div> */}
      <TitleDetail data={data} />
    </>
  )
}

export default DetailMovie
