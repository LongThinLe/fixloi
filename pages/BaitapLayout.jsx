import React from 'react'
import HeaderBTlayout from '../components/HeaderBTlayout'
import Album from '../components/Album'
import AlbumContent from '../components/AlbumContent'
import Albumfooter from '../components/Albumfooter'

const BaitapLayout = () => {
  return (
    <div>
      <HeaderBTlayout />
      <Album />
      <AlbumContent />
      <Albumfooter />
    </div>
  )
}

export default BaitapLayout
