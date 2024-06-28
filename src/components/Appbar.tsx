import React from 'react';
import Battery  from '../assets/Battery.png'
import Network from '../assets/Cellular Connection.png'
import wifi from '../assets/Wifi.png'
type AppbarProps = {
    
};

const Appbar:React.FC<AppbarProps> = () => {
    
    return <div className='flex justify-between pb-3 pr-6 pt-3 pl-7 items-center w-96 '>
        <div className='w-14 h-5'>
    <p className='text-center text-base font-semibold'>9:41</p>
        </div>
        <div className='flex gap-2 w-20 h-3'>
            <img src={Network} alt="" />
            <img src={wifi} alt="" />
            <img src={Battery} alt="" />
        </div>
    </div>
}
export default Appbar;