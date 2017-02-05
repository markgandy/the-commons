import React from 'react'
import defaultPage from '../hocs/defaultPage'

const paragraphs = [
  'The Commons is about sustainable urbanisation - a simple building, assembled with beautiful, natural, materials. Made up of a series of small, but delightful architectural moments. Each of these was created with a social, sustainable and economic mandate in mind. The Commons encourages real behavioral change in its occupants and aims to inspire others to do the same.',
  'This is old Brunswick, it’s industrial, it’s run down and it’s dirty. It sounds gruesome but there is also a strange endearing quality about this area. The silver lining is the people of Brunswick. It is a melting pot of migrant activity, Italian, Greek, Turkish, Lebanese, African all coming together here. There is no judgment; everyone is part of one totally imperfect community.',
  'At its core, The Commons is about people not architectural form. What is really impressive here is the way in which people use the building, the way they interact, it’s how they smile and talk to each other in the lift, it’s their generosity toward one another. The sense of community and camaraderie that has already developed here is incredible. The Commons is filled with great neighbors and good people.',
  'The design strategy for The Commons was to build more with less. To give space and height, light and air. To give people what they needed, not what the marketing agents thought would sell. And the whole, together, is so much more than the sum of its parts.',
  'The planning was kept simple. Materiality took precedence over form.',
  'Hand painted signage lead residents past the fire sprinkler assembly, exposed and painstakingly curated, into the foyer, lined with a tapestry of recycled brickwork from the warehouse that once sat on the site.',
  'Lift lobbies battened in natural Blackbutt and mild steel plate signal entries to generous apartments with a soft palette of waxed timber floors, concrete ceilings and exposed copper services. The northern apartments look out through a shipping chain screen, providing the framework for 24 Wisteria saplings to occupy.',
  'Rooftop decks, surrounded by verdant plants overlook the Brunswick skyline to the city beyond. Neighbors talk at the rooftop plots sharing tips on how best to grow their crops.',
  'The Commons also demonstrates generosity to the wider community. To the west, the ground floor is set back to widen the compressed bike path, the light court and the rear courtyard are both handed over to the public domain rather than being territorially fenced off. These green spaces offer relief to the concrete and asphalt urban landscape of old Brunswick.'
]

const About = () => (
  <div>
    <h2 className='subtitle'>
      About
    </h2>
    <div className='content'>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
)
export default defaultPage(About)
