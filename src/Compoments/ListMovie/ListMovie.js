/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getMovie, { getMoviePage } from '../../api/getMovie'
import Banner from '../../Compoments/banner/Banner'
import { loadingGlobalAction } from '../../Redux/LoadingGlobal'
import Button from '../../UI/Button'
import TitleHome from '../../UI/TitleHome'
import MovieItem from '../../UI/MovieItem'
import style from './ListMovie.module.scss'

const typeMovie = [
  {
    name: 'Popular',
    type: 'popular',
  },
  {
    name: 'Top Rated',
    type: 'top_rated',
  },
]

function ListMovie({ title }) {
  const isLoading = useSelector((state) => state.loading.globalLoading)
  const dispatch = useDispatch()
  const [type, setType] = useState('popular')
  const { data, setPage, setData } = getMovie(type, title)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(loadingGlobalAction.setGlobalLoading(false))
      }, 1000)
    }
  }, [isLoading])

  const handlerType = (titleType) => {
    if (type !== titleType.type) {
      dispatch(loadingGlobalAction.setGlobalLoading(true))
      setType(titleType.type)
      setData([])
    }
  }
  const handlerLoadMore = () => {
    setPage((page) => page + 1)
  }

  //   console.log(data)
  return (
    <div>
      <Banner data={data} />
      <div className=" container my-4 d-flex justify-content-between">
        <div>
          <TitleHome title="Movies" />
        </div>
        <div className="d-flex">
          {typeMovie.map((titleType) => {
            return (
              <Button
                key={titleType.name}
                onClick={() => handlerType(titleType)}
                active={type === titleType.type ? true : false}
              >
                {titleType.name}
              </Button>
            )
          })}
        </div>
      </div>
      <div className={`container ${style.list_Movie}`}>
        {data?.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieItem movie={movie} list />
            </div>
          )
        })}
      </div>
      <div
        onClick={handlerLoadMore}
        className="text-center mt-3"
        style={{ cursor: 'pointer' }}
      >
        <p>Load More</p>
      </div>
    </div>
  )
}

export default ListMovie
