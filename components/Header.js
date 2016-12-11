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
  <div>
    <nav className='nav has-shadow'>
      <div className='container'>
        <div className='nav-left'>
          {links.map(link => (
            <Link href={link.href} key={link.href}>
              <a className={classNames('nav-item', 'is-tab', { 'is-active': currentUrl === link.href })}>
                {link.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  currentUrl: PropTypes.string.isRequired
}

export default Header
