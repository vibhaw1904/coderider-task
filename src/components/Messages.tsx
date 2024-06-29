import React from 'react';
import Message from './Message';
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
type MessagesProps = {
    chats:Chat[]
};

const Messages:React.FC<MessagesProps> = ({chats}) => {

    return (
        <div className="p-4 space-y-4 no-scrollbar  mb-1 h-[520px] overflow-y-scroll	">
          {chats.map(chat => (
            <Message key={chat.id} chat={chat} />
          ))}
        </div>
      );
}
export default Messages;