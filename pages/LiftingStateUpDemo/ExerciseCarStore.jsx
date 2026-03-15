import React from 'react'
import ModalCar from './ModalCar'
import ItemCar from './itemCar'

const dataCar = [
  {id:1,name:'red-car',img:'/img/imgRedCar.jpg',price:1000},
  {id:2,name:'black-car',img:'/img/imgBlackCar.jpg',price:2000},
  {id:3,name:'silver-car',img:'/img/imgSilverCar.jpg',price:3000},
]

const ExerciseCarStore = () => {
  return (
    <div className='container'>
      <h3>ExerciseCarStore</h3>
      <ModalCar />
      <div className='row'>
        {dataCar.map((car,index)=>{
          return <div className='col-md-4' key={car.id}>
            <ItemCar carItem={car}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default ExerciseCarStore