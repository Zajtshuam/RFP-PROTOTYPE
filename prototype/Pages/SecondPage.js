import React from 'react'
import './SecondPage.css'
import Home from '../images/home.jpg'
import {Link} from 'react-router-dom'
import Clocker from '../Clocker.js'
import Button from '../Button.js'


function SecondPage() {
  return (
    <div className='background'>
        <Clocker className='clocker' />
        <Link to ='/third'>
        <Button />
        </Link>
    </div>
  )
}

export default SecondPage