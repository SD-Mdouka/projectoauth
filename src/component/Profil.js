import React from 'react'
import CardBack from './Card/userBack';
import CardFront from './Card/CardFront';

const Profil = () => {
  return (
    <div className='card-container'>
    <div className='card-body'>
      <CardBack />

      <CardFront />
    </div>
  </div>
  )
}

export default Profil