import React from 'react'
import { useParams } from 'react-router-dom'
import DetailMovie from '../../Compoments/DatailMovie/DetailMovie'

function MovieDetail() {
  const param = useParams()
  return (
    <div>
      <DetailMovie id={param.movieId} />
    </div>
  )
}

export default MovieDetail
