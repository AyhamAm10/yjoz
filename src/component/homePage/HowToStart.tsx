import React from 'react'
import img1 from "../../assets/home/ask.svg"
import img2 from "../../assets/home/proceed.svg"
import img3 from "../../assets/home/negotiate.svg"
import img4 from "../../assets/home/youGet.svg"

type iconListType = {
    number: string;
    icon: string;
    title: string;
}
const HowToStart:React.FC = () => {
    const iconList:iconListType[] = [
        {
            number : '01' ,
            icon : img1 ,
            title : "YOU ASK"
        },
        {
            number : '02' ,
            icon : img2 ,
            title : "WE PROCEED "
        },
        {
            number : '03' ,
            icon : img3 ,
            title : "NEGOTIATE "
        },
        {
            number : '04' ,
            icon : img4 ,
            title : "YOU GET "
        }
    ]
  return (
    <section className='bg-gradient-to-r from-red to-yalwe rounded-md my-10 py-3 sm:py-6 md:py-9 px-2 sm:px-4 flex flex-col items-center '>
        <h1 className='text-white text-xl font-semibold'>How to Start</h1>
        <p className='text-[#333] sm:text-4xl lg:text-[2.8rem] font-semibold'>Easy Process</p>
        <div className='mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-around'>
            {
                iconList.map((item:iconListType)=>(
                    <div key={item.number} className='flex flex-col items-center'>
                        <img src={item.icon} alt={item.title} />
                        <div className='text-white text-3xl mt-2'>
                            <span className='text-4xl font-semibold text-white'>{item.number}</span>
                            {item.title}
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default HowToStart