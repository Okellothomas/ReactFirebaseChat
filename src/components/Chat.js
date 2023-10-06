import React from 'react'
import add from "../images/addimagetwo.png"
import "./chat.css"
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat'>
    <div className='chatInfo'>
        <span>Jane</span> 
        <div className='chatIcons'>
            <img src={add} alt="add" />      
         </div>       
          </div>
        <Messages />
    </div>
  )
}

export default Chat