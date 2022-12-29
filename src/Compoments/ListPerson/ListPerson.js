import React from 'react'
import { SwiperSlide } from 'swiper/react'
import getPersonPopular from '../../api/getPersonPopular'
import AutoSwiper from '../../UI/AutoSwiper'
import TitleHome from '../../UI/TitleHome'
import PersonItem from './PersonItem'

function ListPerson() {
  const data = getPersonPopular()
  // console.log(data)
  return (
    <div>
      <div className="py-4">
        <TitleHome title="popular Person" />
      </div>

      <AutoSwiper perView={4}>
        {data?.results?.map((person) => {
          return (
            <SwiperSlide>
              <PersonItem person={person} />
            </SwiperSlide>
          )
        })}
      </AutoSwiper>
    </div>
  )
}

export default ListPerson
