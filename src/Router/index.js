import Movie from '../Page/Movie/Movie'
import Home from '../Page/Home/Home'
import TvSeries from '../Page/TVSeries/TvSeries'
import Search from '../Page/Search/Search'

const routerPulic = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/movie',
    element: Movie,
  },
  //   {
  //     path: '/movie/:movieId',
  //     element: MovieDetail,
  //   },

  {
    path: '/tv',
    element: TvSeries,
  },
  //   {
  //     path: '/tv/:tvId',
  //     element: TVDetail,
  //   },
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
