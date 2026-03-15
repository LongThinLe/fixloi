import React from 'react'

const Phoneitems = (props) => {
  const {phone}= props;
  return (
   <div className='card'>
            <img src={phone.hinhAnh} alt='...' />
            <div className='card-body'>
              <h3 className='card-title'>{phone.tenSP}</h3>
              <p className='card-text'>{phone.giaBan}</p>
              <button className='btn btn-success' onClick={(e)=>{
                setPhoneDetail();
              }}>Xem chi tiết</button>
            </div>
          </div>
  )
}

export default Phoneitems
