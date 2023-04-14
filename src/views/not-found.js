import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Not-Found - Harker Contracting, LLC</title>
        <meta
          property="og:title"
          content="Not-Found - Harker Contracting, LLC"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1be7eee1-e2db-4895-88d0-1e361ec098a1/17fb84e5-5960-4eca-9a50-a626e08a01c1?org_if_sml=1"
        />
      </Helmet>
      <div className="not-found-banner">
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_6nmazhqu.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="not-found-lottie-node"
        ></Player>
        <span className="not-found-text">
          Sorry, we can&apos;t find that page!
        </span>
        <Link to="/" className="not-found-navlink button">
          Let&apos;s go home!
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default NotFound
