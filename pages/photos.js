import React from 'react'
import ImageGallery from 'react-image-gallery'
import defaultPage from '../hocs/defaultPage'

const images = [
  {
    original: '/static/roof_south.jpg'
  },
  {
    original: '/static/front_with_chains.jpg'
  },
  {
    original: '/static/south_west_with_train.jpg'
  }
]

const Photos = () => (
  <div>
    <h2 className='subtitle'>
      Photo Gallery
    </h2>
    <div className='box'>
      <ImageGallery
        items={images}
        slideInterval={3000}
        showThumbnails={false} />
    </div>
  </div>
)
export default defaultPage(Photos)
