import React from 'react'
import defaultPage from '../hocs/defaultPage'

const Awards = () => (
  <div>
    <h2 className='subtitle'>
      The Commoners are extremely proud of the growing list of awards
    </h2>
    <div className='content'>
      <ul>
        <li>2014 AIA National Architecture Awards</li>
        <ul>
          <li>Frederick Romberg Award for Residential Architecture - Multiple Housing</li>
          <li>David Oppenheim Award for - Sustainable Architecture</li>
        </ul>
        <li>Victorian AIA awards, Allan &amp; Beth Coldicutt Award - Sustainable Architecture</li>
        <li>Victorian AIA awards, Best Overend Award Residential Architecture - Multiple Housing</li>
        <li>Premiers Design Awards, Overall Winner</li>
        <li>Premiers Design Awards, Winner Best In Category (Architectural Design)</li>
        <li>Houses Awards, Winner (Sustainability Award)</li>
        <li>Intergrain Timber Vision Awards, Winner (Commercial Exterior)</li>
        <li>2014 BPN Awards</li>
        <ul>
          <li>Multi-density Residential</li>
          <li>'Best of the Best'</li>
        </ul>
        <li>IDEA14 Interior Design Excellence Awards, Winner (Residential - Multi)</li>
        <li>IDEA14 Interior Design Excellence Awards, Winner (Sustainability)</li>
      </ul>
    </div>
  </div>
)
export default defaultPage(Awards)
