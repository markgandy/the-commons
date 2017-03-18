import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default Page => class DefaultPage extends React.Component {
  static getInitialProps (ctx) {
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)
    return {
      ...pageProps,
      currentUrl: ctx.pathname
    }
  }

  render () {
    return (
      <div>
        <Head>
          <title>The Commons</title>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.min.css' />
          <link rel='stylesheet' href='https://unpkg.com/react-image-gallery/styles/css/image-gallery.css' />
        </Head>
        <div>
          <Header {...this.props} />
          <section className='hero is-light'>
            <div className='hero-body'>
              <div className='container is-fluid'>
                <Page {...this.props} />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    )
  }
}
