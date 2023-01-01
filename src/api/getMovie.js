/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useEffect, useState } from 'react'

function getMovie(type, title) {
  const [page, setPage] = useState(1)

  const [data, setData] = useState([])

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${title}/${type}?api_key=ddf0bd85ae82a3f75ca3bf9421dc1c19&language=en-US&page=${page}`,
        )
        if (page !== 1) {
          setData([...data, ...res?.data?.results])
        } else {
          setData(res?.data?.results)
        }
      } catch (error) {}
    }
    sendRequest()
  }, [type, page])

  return { data, setPage, page, setData }
}

export default getMovie
