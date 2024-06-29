
import { useEffect, useState } from 'react';
import './App.css'
import Appbar from './components/Appbar'
import Header from './components/Header'
import Messages from './components/Messages';
import Reply from './components/Reply'
import axios from 'axios';
function App() {
 
  const [chats,setChats]=useState([])
  useEffect(()=>{
    axios.get('https://qa.corider.in/assignment/chat?page=0').then((res)=>{
      setChats(res.data.chats)
      console.log(res.data.chats)
    }).catch((e)=>console.log(e)
    )
  },[])
console.log(chats)
  return (
    <div className='flex justify-center mt-7 '>
 <div className='bg-[#FAF9F4] align-middle rounded-[32px] w-[375px] h-[812px]  ' >
    <Appbar/>
    <Header/>
    <Messages chats={chats} />
    <Reply/>
    </div>
    </div>
   
  )
}

export default App
