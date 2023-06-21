import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Communications Producer</title>
        <meta property="og:title" content="Forward Communications Producer" />
      </Helmet>
    </div>
  )
}

export default Home
