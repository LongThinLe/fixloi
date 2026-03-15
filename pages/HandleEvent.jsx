import React from 'react'

const HandleEvent = () => {

  //callback function
  const handleClick = (e) => {
    console.log('hello ahihi');
  }

  return (
    <div className='container'>
      <h1>Handle event</h1>

      <button className='btn btn-success' onClick={handleClick}>
        click me !
      </button>

      <br /> <br />

      <button className='btn btn-danger' onClick={(e) => {
        console.log('hello anonymous function');
      }}>click</button>

    </div>
  )
}

export default HandleEvent