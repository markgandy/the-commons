import React from 'react'
import defaultPage from '../hocs/defaultPage'

const Bees = () => (
  <div>
    <h2 className='subtitle'>
      We have some rooftop beehives! The bees are looked after by a few Commons' residents.
    </h2>
    <div className='box'>
      <figure className='image'>
        <img src='/static/bees.jpg' />
      </figure>
    </div>
  </div>
)
export default defaultPage(Bees)
