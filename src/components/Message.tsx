import React, { useEffect } from 'react';

interface Sender {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
}

interface Chat {
  id: string;
  message: string;
  sender: Sender;
  time: string;
}

interface MessageProps {
  chat: Chat;
}

const Message: React.FC<MessageProps> = ({ chat }) => {
  const { message, sender } = chat;

    // useEffect(()=>{
    //   console.log(message)
    //   console.log(sender);
      
    // },[chat.id])
  const messageClass = sender.self ? 'bg-blue-500 text-white rounded-t-lg' : 'rounded-b-lg bg-white text-gray-900';
  const messageContainerClass = sender.self ? 'justify-end' : 'justify-start';
  const textCol=sender.self?'text-[#FFFFFF]':'text-[#606060]'

  return (
    <div className={`flex items-start mb-4 ${messageContainerClass}`}>
      {!sender.self && (
        <img src={sender.image} alt="Sender" className="w-10 h-10 rounded-full  mr-3" />
      )}
      <div className={`p-3  ${messageClass} max-w-md shadow-md`}>
        <p className={` ${textCol}`}>{message}</p>
      </div>
     
    </div>
  );
};

export default Message;
