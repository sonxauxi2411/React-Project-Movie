//background img banner style
export const bgBanner = (url) => {
  return {
    backgroundImage:
      'url(' + `${`https://image.tmdb.org/t/p/original${url}`}` + ')',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '45%',
    // backgroundAttachment: 'fixed',
    position: 'relative',
  }
}

//background img poster
export const bgPoster = (url) => {
  return {
    backgroundImage:
      'url(' + `${`https://image.tmdb.org/t/p/original${url}`}` + ')',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '150%',
    // backgroundAttachment: 'fixed',
    position: 'relative',
    width: '100%',
  }
}

export const bgPosterDetail = (url) => {
  return {
    backgroundImage:
      'url(' + `${`https://image.tmdb.org/t/p/original${url}`}` + ')',
    backgroundPosition: 'center top ',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '140%',
    // backgroundAttachment: 'fixed',
    position: 'relative',
    width: '100%',
    // height: '600px',
  }
}
