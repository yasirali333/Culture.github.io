import React from 'react'

const GoToH3 = () => {
    const GoToBtn=()=>{
    window.scrollTo({ top:900, left:0, behavior:"smooth"})
    }
  return (
    <div className='top-btn' onClick={GoToBtn}>
       <h5>UNSTITICHED</h5>
    </div>
  )
}

export default GoToH3;