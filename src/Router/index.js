import Movie from '../Page/Movie/Movie'
import Home from '../Page/Home/Home'
import TvSeries from '../Page/TVSeries/TvSeries'
import Search from '../Page/Search/Search'
import MovieDetail from '../Page/Movie/MovieDetail'
import TvSeriesDetail from '../Page/TVSeries/TvSeriesDetail'

const routerPulic = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/movie',
    element: Movie,
  },
  {
    path: '/movie/:movieId',
    element: MovieDetail,
  },

  {
    path: '/tv',
    element: TvSeries,
  },
  {
    path: '/tv/:tvId',
    element: TvSeriesDetail,
  },
  //   {
  //     path: '/person',
  //     element: Person,
  //   },
  //   {
  //     path: '/person/:personId',
  //     element: Person,
  //   },
  {
    path: '/search',
    element: Search,
  },
]

export default routerPulic
