import React, { useState } from 'react'
import Card from './Card';
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";




function Testimonials(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);
    
    function leftShiftHandler(){
      if(index-1 < 0){
          setIndex(reviews.length-1);
      }
      else{
        setIndex(index-1);
      }
    }

    function rightShiftkHandler(){
        if(index + 1 >=reviews.length ){
          setIndex(0);
        }
        else{
          setIndex(index+1);
        }
    }

    function surprisehandeler(){
       let randomIndex =  Math.floor(Math.random() * reviews.length);
       setIndex(randomIndex);
    }






  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-md'>
        <Card review={reviews[index]}></Card>

        <div className='flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold'>
            <button  onClick={leftShiftHandler}
             className='cursor-pointer hover:text-violet-500 '>
               <FaChevronLeft/>
            </button>
                
            <button onClick={rightShiftkHandler}
            className='cursor-pointer hover:text-violet-500 ' >
                <FaChevronRight/>
            </button>
        </div>
        <div className='mt-3' >
            <button onClick={surprisehandeler} className=' mt-2 bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg  '>
                surprise me
            </button>
        </div>
    </div>
  )
}

export default Testimonials