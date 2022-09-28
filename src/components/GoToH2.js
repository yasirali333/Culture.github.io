import React from 'react'

const GoToH2 = () => {
    const GoToBtn=()=>{
    window.scrollTo({ top:400, left:0, behavior:"smooth"})
    }
  return (
    <div className='top-btn' onClick={GoToBtn}>
   <h5>MASTER'S COLLECTION</h5>
    </div>
  )
}

export default GoToH2;