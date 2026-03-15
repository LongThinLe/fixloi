import React from 'react'
import AlbumCard from './AlbumCard'

const AlbumContent = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <AlbumCard />
        </div>

        <div className='col-4'>
          <AlbumCard />
        </div>

        <div className='col-4'>
          <AlbumCard />
        </div>
      </div>
    </div>
  )
}

export default AlbumContent
