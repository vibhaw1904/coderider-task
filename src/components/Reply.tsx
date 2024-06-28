import React from 'react';
import attach from '../assets/attach.png'
import send from '../assets/send.png'
import home from '../assets/home.png'
type ReplyProps = {
    
};

const Reply:React.FC<ReplyProps> = () => {
    
    return <div>
         <div className='items-center flex justify-center'>
        <div className=' bg-[#FFFFFF] flex justify-between items-center pt-[11px] pr-3 pb-[11px] pl-3 gap-4 w-[343px] h-[42px] rounded-lg'>
            <input type="text" placeholder='Reply to @rohit'/>
            <div className='flex gap-4'>
            <img className='w-5 h-5' src={attach} alt="" />
            <img className='w-5 h-5' src={send} alt="" />
            </div>
        </div>
        
    </div>
    <div>
    <img src={home} alt="" />
            </div>
    </div>
}
export default Reply;