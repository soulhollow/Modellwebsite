import React, { useState } from 'react';

const ChatRoom = ({ model }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    // Nachricht senden Logik hier
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div>
      <h1>Chat mit {model.name}</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Senden</button>
    </div>
  );
};

export default ChatRoom;
