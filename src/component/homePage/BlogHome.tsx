import React from 'react'
import imgcomp from "../../assets/home/Component 22.png"
import { blogsList } from '../../content'
import CostumBtn from '../costumeComponent/CostumBtn'
export const BlogHome:React.FC = () => {
  return (
    <div className={`w-full my-10 px-5 sm:px-9 lg:px-20 `}>
    <div className='flex-center'>
    <button className="px-8 py-4 rounded-[0.5rem] text-red cursor-pointer bg-[#FFC21B1A] text-sm font-medium ">
    Blog
   </button>
    </div>
   <h2 className="text-center text-3xl font-bold my-10 text-dark">Most <span className="text-gradient">Popular</span> Latest Blog  </h2>
    <div className='grid grid-col-1 md:grid-cols-2 md:grid-rows-1 gap-4 sm:gap-6 mdLgap-10 lg:gap-20 items-center'>
        <div className='flex flex-col gap-5'>
            <img src={imgcomp} className='w-full' alt="" />
            <p className='text-2xl font-normal text-[#252641] '>Lorem ipsum dolor sit amet consectetur. Sed sit condimentum urna et nibh tellus dolor.</p>
            <p className='text-lg text-[#696984]'>Lorem ipsum dolor sit amet consectetur. Blandit pellentesque ante ultrices dolor vehicula vulputate.</p>
            <span className='text-[#696984] text-lg tracking-wide'>Read more</span>
        </div>
        <div>
            <div className='flex flex-col gap-5'>
                {
                    blogsList.map((item , index)=>(
                        <div key={index} className='flex flex-col sm:flex-row gap-4 items-center'>
                            <img src={item.img} alt="blog img" className='rounded-md ' />
                            <div>
                                <p className='text-lg font-medium text-[#252641] mb-4'>{item.title} </p>
                                <p className='text-lg tracking-wide text-[#696984] '>{item.desc} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    <div className='flex-center py-10'>
    <CostumBtn value='Show All'/>
    </div>
 </div>
  )
}
