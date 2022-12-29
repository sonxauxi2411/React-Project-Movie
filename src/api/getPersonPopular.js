/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import useHttp from '../Hook/useHttp'

function getPersonPopular() {
  const { data, error, loading } = useHttp(
    `https://api.themoviedb.org/3/trending/person/day?api_key=ddf0bd85ae82a3f75ca3bf9421dc1c19`,
  )

  if (error) {
    return <h1>{error}</h1>
  }

  if (loading) {
    return <h1>loading</h1>
  }

  return data
}

export default getPersonPopular
