/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import useHttp from '../Hook/useHttp'

function getSearchMovieId(id, type) {
  const { data, loading, error } = useHttp(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=ddf0bd85ae82a3f75ca3bf9421dc1c19&language=en-US`,
  )
  if (loading) {
    return <h1>Loading</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return data
}

export default getSearchMovieId
