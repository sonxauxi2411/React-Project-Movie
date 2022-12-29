import React from 'react'
import style from './UI.module.scss'
function TitleHome({ title }) {
  return (
    <div className={style.wrapp}>
      <h4 className={style.title}>{title}</h4>
    </div>
  )
}

export default TitleHome
