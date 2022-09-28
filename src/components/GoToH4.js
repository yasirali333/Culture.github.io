import React from 'react'

const GoToH4 = () => {
    const GoToBtn=()=>{
    window.scrollTo({ top:1300, left:0, behavior:"smooth"})
    }
  return (
    <div className='top-btn' onClick={GoToBtn}>
       <h5>STITCHED</h5>
    </div>
  )
}

export default GoToH4;