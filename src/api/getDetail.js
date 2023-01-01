/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useEffect, useState } from 'react'

function getDetail(id, type) {
  const [data, setData] = useState([])
  // console.log(id, type)
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=ddf0bd85ae82a3f75ca3bf9421dc1c19&language=en-US`,
        )
        // console.log(res)
        setData(res?.data)
      } catch (error) {}
    }
    sendRequest()
  }, [type, id])

  return data
}

export default getDetail
