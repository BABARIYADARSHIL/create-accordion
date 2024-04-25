import React, { useState } from 'react';
import { question  }  from './api';
import "./Accordion.css"
import MyAccordion from './MyAccordion';

function Accordion() {
    const [data, setData]= useState(question);
  return (
    <>
    
    <section className='main-div'>
    <h1>React Interview Question</h1>
    {
        data.map((current)=>{
            const {id} =current;
            return <MyAccordion key={id} {...current}/>
        })
    }
    </section>
    </>
  )
}

export default Accordion