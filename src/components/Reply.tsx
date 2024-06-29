import React, { useState } from "react";
import attach from "../assets/attach.png";
import send from "../assets/send.png";
import home from "../assets/home.png";
import Attach from "./Attach";
type ReplyProps = {};

const Reply: React.FC<ReplyProps> = () => {
  const [showattach, setShowAttach] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAttach(!showattach);
  };

  return (
    <div className=" pb-14 w-[375px] h-[114px]">
      <div className="items-center flex justify-center pt-2 pr-4 pb-2 pl-4 w-[375px] h-[58px] ">
        <div className=" bg-[#FFFFFF] flex justify-between items-center gap-4 pt-[11px] pr-3 pb-[11px] pl-3  w-[343px] h-[42px] rounded-lg">
          <input type="text" placeholder="Reply to @rohit" />
          <div className="flex gap-4">
            <button onClick={handleClick}>
              {" "}
              <img className="w-5 h-5" src={attach} alt="" />
            </button>
            <button>
              {" "}
              <img className="w-5 h-5" src={send} alt="" />
            </button>
          </div>
          {showattach && (
            <div className="absolute ml-52 mb-24 w-[124px] h-[44px]">
              <Attach />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center pt-9">
        <img src={home} alt="" />
      </div>
    </div>
  );
};
export default Reply;
