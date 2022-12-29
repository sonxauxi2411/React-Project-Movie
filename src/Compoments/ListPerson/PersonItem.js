import React from 'react'
import { bgPoster } from '../../assets/Images'
import style from './Person.module.scss'
function PersonItem({ person }) {
  return (
    <div style={bgPoster(person?.profile_path)} className={style.profile}>
      <div className={style.bg__drop}></div>
      <h4>{person?.name}</h4>
    </div>
  )
}

export default PersonItem
