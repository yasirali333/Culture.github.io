import React from 'react'

const GoToH1 = () => {
    const GoToBtn=()=>{
    window.scrollTo({ top:0, left:0, behavior:"smooth"})
    }
  return (
    <div className='top-btn' onClick={GoToBtn}>
     <h5>NEW ARRIVAL</h5>
    </div>
  )
}

export default GoToH1;
