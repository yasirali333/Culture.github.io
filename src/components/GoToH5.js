import React from 'react'

const GoToH5 = () => {
    const GoToBtn=()=>{
    window.scrollTo({ top:1800, left:0, behavior:"smooth"})
    }
  return (
    <div className='top-btn' onClick={GoToBtn}>
          <h5>BABY GIRLS</h5>
    </div>
  )
}

export default GoToH5;