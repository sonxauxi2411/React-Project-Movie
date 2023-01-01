import React from 'react'
import style from './UI.module.scss'

function TitleGenres({ genres, banner }) {
  // console.log(genres)
  return (
    <>
      {genres?.slice(0, 2)?.map((genre) => (
        <div className={`${style.genres} ${banner ? style.banner : ''}`}>
          {genre.name}
        </div>
      ))}
    </>
  )
}

export default TitleGenres
