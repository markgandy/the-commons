import React from 'react'
import defaultPage from '../hocs/defaultPage'

const Index = () => (
  <div>
    <h2 className='subtitle'>
      Welcome to The Commons - city apartment living done right
    </h2>
    <div className='box'>
      <figure className='image'>
        <img src='/static/front_with_train.jpg' />
      </figure>
    </div>
  </div>
)
export default defaultPage(Index)
