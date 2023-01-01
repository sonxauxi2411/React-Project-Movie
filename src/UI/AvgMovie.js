import React from 'react'
import style from './UI.module.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function AvgMovie({ avg, poster }) {
  const percentage = avg * 10

  return (
    <div className={`${style.percent} ${poster ? style.poster : ''}`}>
      <CircularProgressbar
        value={percentage}
        text={avg?.toFixed(1)}
        styles={buildStyles({
          rotation: 0.25,

          strokeLinecap: 'butt',
          textSize: `${poster ? '32px' : '28px'}`,
          pathTransitionDuration: 0.5,

          pathColor: `rgba(102, 187, 106)`,
          textColor: '#ffff',
          trailColor: 'rgba(0,0,0,0.01)',
        })}
      />
    </div>
  )
}

export default AvgMovie
