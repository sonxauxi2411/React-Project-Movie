import React from 'react'
import { useNavigate } from 'react-router-dom'
import { iconPlay } from '../assets/Icon'
import { bgPoster } from '../assets/Images'
import AvgMovie from './AvgMovie'
import style from './MovieItem.module.scss'

function MovieItem({ movie, list }) {
  const naviga = useNavigate()
  const id = movie.id
  const type = movie.media_type

  const avg = movie.vote_average
  const releaseDate = movie.first_air_date || movie.release_date
  const yearRelease = releaseDate.slice(0, 4)
  //   console.log(yearRelease)
  const handlerDetail = (e) => {
    if (list) {
      naviga(`${id}`)
    } else {
      naviga(`${type}/${id}`)
    }
  }
  return (
    <div
      style={bgPoster(movie?.poster_path)}
      className={`${style.movie} ${list && style.list}`}
    >
      <div className={style.bg__drop}></div>
      <div className={style.movie__title}>
        <div className="d-flex flex-column gap-3">
          <AvgMovie avg={avg} poster />
          <p>{yearRelease}</p>
        </div>

        <p className={style.title}>
          {movie?.name || movie?.title || movie?.original_name}
        </p>
      </div>
      <div className={style.btn}>
        <button onClick={handlerDetail}>{iconPlay}</button>
      </div>
    </div>
  )
}

export default MovieItem
