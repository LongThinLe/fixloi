//rafce
import React from 'react'
import { HeaderHome } from '../components/HeaderHome'
import Navigation from '../components/Navigation'

import Footer from '../components/Footer'

const HomePages = () => {
  return (
    <>
      <HeaderHome />
      <div className='row gap-0'>
        <div className='col-4 n-0 p-0'>
            <Navigation />

        </div>
        <div className='col-8 n-0 p-0'>
            <Content />

        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomePages
