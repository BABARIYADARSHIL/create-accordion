import React, { useState } from 'react'

const MyAccordion =({question, answer}) => {
    const[show, setShow ] = useState(false);
  return (
    <>
    <div className='accordion-item'>
        <div className='main-heading'>
        <p onClick={()=>setShow(!show)}>{show? "-": "+"}</p>
        <h3>{question}</h3>
        </div>
        {
            show && <p className='answer'>{answer}</p>
        }
        </div>
    </>
  )
}

export default MyAccordion;