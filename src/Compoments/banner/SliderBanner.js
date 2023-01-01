import React from 'react'
import getSearchMovieId from '../../api/getSearchMovieId'
import { bgBanner } from '../../assets/Images'
import { useNavigate } from 'react-router-dom'
import AvgMovie from '../../UI/AvgMovie'
import TitleGenres from '../../UI/TitleGenres'
import style from './Banner.module.scss'

function SliderBanner({ onMovie }) {
  const type = onMovie?.media_type
  const id = onMovie?.id
  const navigate = useNavigate()
  // console.log(onMovie)
  //   console.log(type)
  const data = getSearchMovieId(id, type)

  const genres = data?.genres
  const handlerMovieDetail = (e) => {
    e.preventDefault()
    if (!type) {
      navigate(`${id}`)
    } else {
      navigate(`/${type}/${id}`)
    }

    // console.log(`/${type}/${id}`)
    //console.log(onMovie)
  }

  return (
    <>
      <div className={style.banner__background}></div>
      <div style={bgBanner(onMovie?.backdrop_path)}></div>
      <div className={style.banner__title}>
        <h1>{onMovie?.name || onMovie?.title}</h1>
        <div className="d-flex gap-3  align-items-center">
          <AvgMovie avg={onMovie?.vote_average} />
          <div>
            <div className="d-flex gap-2">
              <TitleGenres genres={genres} banner />
            </div>
          </div>
        </div>
        <div>
          <p>{onMovie?.overview.slice(0, 300)}</p>
        </div>
        <div className={style.banner__btn}>
          <button onClick={handlerMovieDetail}>Watch now</button>
        </div>
      </div>
    </>
  )
}

export default SliderBanner
