import React from 'react'
import defaultPage from '../hocs/defaultPage'
import { ABOUT_US_PARAGRAPHS } from '../Constants'

const paragraphs = ABOUT_US_PARAGRAPHS.map((paragraph) =>
  <p>{paragraph}</p>
)

const About = () => (
  <div>
    <h2 className='subtitle'>
      About
    </h2>
    <div className='content'>
      {paragraphs}
    </div>
  </div>
)
export default defaultPage(About)
