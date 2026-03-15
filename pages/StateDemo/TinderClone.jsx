import React, { useState } from 'react'

const TinderClone = () => {
  const[numPeople,setNumpeople] = useState(1);
  
  const randomNumpeople = () => {
    let numRandom = Math.floor(Math.random() * 99) + 1; 
// Math.random() trả về số từ 0 đến nhỏ hơn 1
// Nhân 99 => từ 0 đến nhỏ hơn 99
// Math.floor() => làm tròn xuống (0 → 98)
// +1 => kết quả cuối cùng từ 1 đến 99
    setNumpeople(numRandom);
}
  
  
  return (
    <div className='container'>
        <h1>Tinder app</h1>
        <div className='card w-25'>
          <div className='card-header bg-danger fs-1 fw-bold text-white'>Tinder app</div>
          <img src={`https://i.pravatar.cc?u=1${numPeople}`} alt="..." />
          <div className='card-body'>
            <h1>Name</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='card-text'>Age: 20</p>

          </div>
          <div className='card-footer d-flex justify-content-between'>
            <button className='btn btn-dark text-white' onClick={()=>{
              randomNumpeople();
            }}>Dislike</button>
            <button className='btn btn-danger text-white' onClick={()=>{
              randomNumpeople();
            }} >Like</button>

          </div>
        </div>

      
    </div>
  )
}


export default TinderClone
