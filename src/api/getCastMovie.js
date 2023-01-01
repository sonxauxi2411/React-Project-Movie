/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function getCastMovie(id, type) {
  const [data, setData] = useState([])
  // console.log(id, type)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=ddf0bd85ae82a3f75ca3bf9421dc1c19&language=en-US`,
        )
        setData(res?.data)
      } catch (error) {}
    }
    sendRequest()
  }, [type, id])

  return data
}

export default getCastMovie
