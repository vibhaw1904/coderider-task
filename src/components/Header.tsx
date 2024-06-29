import React from 'react';
import back from '../assets/back.png'
import edit from '../assets/edit.png'
import grp from '../assets/grp.png'
import three from '../assets/three.png'
type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return <div className='border-b border-[#E5E5E0] justify-center pt-5  pb-4 pl-4 pr-4 w-[375] h-32 mt-2 gap-4 '>
        <div className='flex justify-between items-center  h-8  '>
        <div className='flex items-center gap-3 '>
        <img src={back} alt="" />
        <h1 className='font-bold text-2xl'>Trip 1</h1>
        </div>
        <div className=''>
       <img src={edit} alt="" />
        </div>
        </div>
        <div className='w-80 h-12 gap-4 flex mt-10 pb-10   items-center  justify-between '>
        <img src={grp} alt="" />
        <div className='flex items-center  gap-3 mr-16'>
            <p><span className='font-medium text-gray-400'>From</span> <span className='font-bold text-black ml-2'>IGI Airport, T3 <br /></span><span className='font-medium text-gray-400'>To</span>
            <span className='font-bold text-black ml-2'>Sector 28</span></p>
            
        </div>
        <div className='flex items-end justify-end'><img  src={three} alt="" /></div>
        </div>
    </div>
}
export default Header;