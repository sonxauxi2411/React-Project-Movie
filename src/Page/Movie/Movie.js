/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getMovie from '../../api/getMovie'
import Banner from '../../Compoments/banner/Banner'
import { loadingGlobalAction } from '../../Redux/LoadingGlobal'

function Movie() {
  const isLoading = useSelector((state) => state.loading.globalLoading)

  const dispatch = useDispatch()
  const [type, setType] = useState('popular')
  const data = getMovie(type)
  const handlerPopular = () => {
    if (type !== 'popular') {
      dispatch(loadingGlobalAction.setGlobalLoading(true))
      setType('popular')
    }
  }
  const handlerTopRated = () => {
    if (type !== 'top_reted') {
      dispatch(loadingGlobalAction.setGlobalLoading(true))
      setType('top_rated')
    }
  }
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(loadingGlobalAction.setGlobalLoading(false))
      }, 2000)
    }
  }, [isLoading])

  return (
    <div>
      <Banner data={data} />
      <div className="p-5 mt-4">
        <button onClick={handlerPopular}>popular</button>
        <button onClick={handlerTopRated}>Top Rated</button>
      </div>
      <div>
        <h1>Data</h1>
      </div>
    </div>
  )
}

export default Movie
