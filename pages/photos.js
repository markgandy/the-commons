import React from 'react'
import ImageGallery from 'react-image-gallery'
import defaultPage from '../hocs/defaultPage'

const images = [
  {
    original: 'http://thecommons.me/content/images/2014/12/roof_south.jpg'
  },
  {
    original: 'http://thecommons.me/content/images/2014/12/front_with_chains.jpg'
  },
  {
    original: 'http://thecommons.me/content/images/2014/12/south_west_with_train.jpg'
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
