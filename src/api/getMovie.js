/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function getMovie(type) {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=ddf0bd85ae82a3f75ca3bf9421dc1c19&language=en-US&page=${page}`,
        )
        setData(res.data)
      } catch (error) {}
    }
    sendRequest()
  }, [type, page])

  return data
}

export default getMovie
