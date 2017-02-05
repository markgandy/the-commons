import React, { PropTypes } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/bees', text: 'Bees' },
  { href: '/awards', text: 'Awards' },
  { href: '/photos', text: 'Photos' }
]

const Header = ({ currentUrl }) => (
  <section className='hero is-primary is-bold'>
    <div className='hero-body'>
      <div className='container is-fluid'>
        <h1 className='title'>
          The Commons
        </h1>
        <h2 className='subtitle'>
        Sustainable city living
        </h2>
        <nav className='nav has-shadow'>
          <div className='nav-left'>
            {links.map(link => (
              <Link href={link.href} key={link.href}>
                <a className={classNames('nav-item', 'is-tab', { 'is-active': currentUrl === link.href })}>
                  {link.text}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  </section>
)

Header.propTypes = {
  currentUrl: PropTypes.string.isRequired
}

export default Header
