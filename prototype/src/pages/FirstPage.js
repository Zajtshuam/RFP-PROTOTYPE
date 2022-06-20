import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import {Link} from 'react-router-dom';
import logo from '../images/maskgroup.jpg'
import photo from '../images/PIXELS.jpg'
import picture from '../images/frameten.jpg'
import Clock from '../Clocker.js'



const slides = [
    logo, 
    photo,
    picture
  ]
  
  export default function FirstPage() {
    const [index, set] = useState(0)
    const transitions = useTransition(index, {
      key: index,
      from: { opacity: 0},
      enter: { opacity: 2 },
      leave: { opacity: -10},
      config: { duration: 3000 },
      onRest: (_a, _b, item) => {
        if (index === item) {
          set(state => (state + 1) % slides.length)
        }
      },
      exitBeforeEnter: true,
    })
    return (
      <div>
      <div className="flex fill center">
        <div>
        <div>
        <div className="Clocker">
        <Clock></Clock>
        </div>
        <div>
        <div>
        <div>
          </div>
        <Link to='/second'>
        {transitions((style, i) => (
          <animated.div
            className='bg'
            style={{
              ...style,
              backgroundImage: `url(${slides[i]})`,
            }}
          />
        ))}
        </Link>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }