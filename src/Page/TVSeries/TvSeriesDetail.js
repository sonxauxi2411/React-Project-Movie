import React from 'react'
import { useParams } from 'react-router-dom'
import DetailMovie from '../../Compoments/DatailMovie/DetailMovie'

function TvSeriesDetail() {
  const param = useParams()
  console.log()
  return (
    <div>
      <DetailMovie id={param.tvId} />
    </div>
  )
}

export default TvSeriesDetail
