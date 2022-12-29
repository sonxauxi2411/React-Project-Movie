import axios from 'axios'
import { useEffect, useState } from 'react'

function useHttp(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const sendRequest = async (url) => {
    setLoading(true)
    try {
      const res = await axios.get(url)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      setError(null)
      setLoading(false)
    }
  }
  useEffect(() => {
    sendRequest(url)
  }, [url])
  return { data, error, loading }
}

export default useHttp
