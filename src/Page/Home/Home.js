import React from 'react'
import getTreningMovies from '../../api/getTreningMovies'
import Banner from '../../Compoments/banner/Banner'
import PopularMovie from '../../Compoments/ListMovie/PopularMovie'
import PopularSeries from '../../Compoments/ListMovie/PopularSeries'
import ListPerson from '../../Compoments/ListPerson/ListPerson'

function Home() {
  const data = getTreningMovies()
  return (
    <div>
      <Banner data={data?.results} />
      <div className="container d-flex flex-column gap-4 pt-4 ">
        <PopularMovie />
        <PopularSeries />
        <ListPerson />
      </div>
    </div>
  )
}

export default Home
