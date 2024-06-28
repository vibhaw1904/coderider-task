
import { useEffect, useState } from 'react';
import './App.css'
import Appbar from './components/Appbar'
import Header from './components/Header'
import Messages from './components/Messages';
import Reply from './components/Reply'
import axios from 'axios';
function App() {
  // const chats = [
  //   {
  //     id: "1",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "", is_kyc_verified: true, self: true, user_id: "1" },
  //     time: "2024-06-28 14:20:37"
  //   },
  //   {
  //     id: "2",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "https://example.com/image.jpg", is_kyc_verified: true, self: false, user_id: "2" },
  //     time: "2024-06-28 14:21:37"
  //   },
  //   {
  //     id: "2",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "https://example.com/image.jpg", is_kyc_verified: true, self: true, user_id: "2" },
  //     time: "2024-06-28 14:21:37"
  //   },
  //   {
  //     id: "2",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "https://example.com/image.jpg", is_kyc_verified: true, self: true, user_id: "2" },
  //     time: "2024-06-28 14:21:37"
  //   },
  //   {
  //     id: "2",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "https://example.com/image.jpg", is_kyc_verified: true, self: false, user_id: "2" },
  //     time: "2024-06-28 14:21:37"
  //   },
  //   {
  //     id: "2",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "https://example.com/image.jpg", is_kyc_verified: true, self: true, user_id: "2" },
  //     time: "2024-06-28 14:21:37"
  //   },
  //   {
  //     id: "2",
  //     message: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money!",
  //     sender: { image: "https://example.com/image.jpg", is_kyc_verified: true, self: false, user_id: "2" },
  //     time: "2024-06-28 14:21:37"
  //   }
  // ];
  const [chats,setChats]=useState([])
  useEffect(()=>{
    axios.get('https://qa.corider.in/assignment/chat?page=0').then((res)=>{
      setChats(res.data.chats)
    }).catch((e)=>console.log(e)
    )
  },[])
console.log(chats)
  return (
    <div className='content-center'>
 <div className='bg-[#FAF9F4] align-middle rounded-xl w-[375px] h-[812px]  ' >
    <Appbar/>
    <Header/>
    <Messages chats={chats} />
    <Reply/>
    </div>
    </div>
   
  )
}

export default App
