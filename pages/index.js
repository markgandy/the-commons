import React from 'react'
import defaultPage from '../hocs/defaultPage'

const Index = () => (
  <div>
    <h2 className='subtitle'>
      Welcome to The Commons - city apartment living done right
    </h2>
    <div className='box'>
      <img src='http://thecommons.me/content/images/2014/12/front_with_train.jpg' />
    </div>
  </div>
)
export default defaultPage(Index)
