import { useState } from 'react';
import Header from '../landingPage/header';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-64px)] relative pt-2">
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          className="lg:hidden fixed top-20 right-4 z-50 bg-blue-500 text-white p-2 rounded-full"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? '✕' : '☰'}
        </button>

        {/* Left Sidebar - Conversations */}
        <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:w-1/4 w-full fixed lg:relative z-40 bg-white border-r
        transition-transform duration-300 ease-in-out h-screen lg:h-[calc(100vh-64px)] top-0 lg:top-16`}>
          <div className="p-3 flex items-center border-b lg:mt-0 mt-16">
            <div className="flex items-center gap-2">
              <img src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png" alt="profile" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold text-blue-500">David Peters</h3>
                <p className="text-xs text-gray-500">Senior Developer</p>
              </div>
            </div>
            <button className="ml-auto text-gray-400">
              ✏️
            </button>
          </div>
          <div className="p-3 border-b">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-lg">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full p-2 rounded-full bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-130px)]">
            {/* Chat List */}
            {[
              { name: "Lisa Roy", message: "Hi, are you Available Tomorrow?", time: "10:35 AM", unread: 1 },
              { name: "Jamie Taylor", message: "Nice One\nWill Do it tomorrow", time: "10:36 AM", unread: 3 },
              { name: "Jason Roy", message: "That's Great. I am Looking forward to having a great start.", time: "10:35 AM", read: true },
              { name: "Amy Frost", message: "Hi, will you start working on the chat app right now?", time: "10:35 AM", read: true },
              { name: "Paul Wilson", message: "See you tomorrow champ", time: "10:35 AM", read: true },
              { name: "Ana Williams", message: "??", time: "10:36 AM", unread: 1 },
            ].map((chat, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3 flex-1 overflow-hidden">
                  <h3 className="font-semibold text-blue-500">{chat.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">{chat.time}</span>
                  {chat.unread && (
                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1">
                      {chat.unread}
                    </span>
                  )}
                  {chat.read && (
                    <span className="text-green-500 text-lg mt-1">✓</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className={`flex-1 flex flex-col w-full lg:w-3/4
        ${showSidebar ? 'lg:ml-0' : 'ml-0'} transition-all duration-300 ease-in-out`}>
          {/* Chat Header */}
          <div className="p-4 bg-white border-b flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png"
              alt="avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <div className="ml-3">
              <h2 className="font-semibold text-blue-500 text-sm sm:text-base">Dianne Johnson</h2>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span className="text-xs text-green-500">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50">
            {/* Received Message */}
            <div className="flex mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png" alt="avatar" className="w-8 h-8 rounded-full mr-2 self-end" />
              <div className="bg-blue-100 rounded-lg p-3 max-w-[70%] shadow-sm">
                <p>Hi David, have you got the project report pdf?</p>
              </div>
            </div>

            {/* Sent Message */}
            <div className="flex mb-4 justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%] shadow-sm">
                <p>NO. I did not get it</p>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png" alt="avatar" className="w-8 h-8 rounded-full ml-2 self-end" />
            </div>

            {/* Date Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">Yesterday</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Additional Messages */}
            <div className="flex mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/5231/5231020.png" alt="avatar" className="w-8 h-8 rounded-full mr-2 self-end" />
              <div className="bg-blue-100 rounded-lg p-3 max-w-[70%] shadow-sm">
                <p>Ok, I will just send it here. Plz be sure to fill the details by today end of the day.</p>
              </div>
            </div>

            <div className="flex mb-4 ml-10">
              <div className="bg-white border rounded-lg p-3 max-w-[70%] shadow-sm">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/40" alt="document" className="w-12 h-16 mr-2 object-cover" />
                  <span className="text-blue-500">project_report.pdf</span>
                </div>
              </div>
            </div>

            <div className="flex mb-4 justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%] shadow-sm">
                <p>Ok. Should I send it over email as well after filling the details.</p>
              </div>
              <img src="https://via.placeholder.com/30" alt="avatar" className="w-8 h-8 rounded-full ml-2 self-end" />
            </div>

            <div className="flex mb-4">
              <img src="https://via.placeholder.com/30" alt="avatar" className="w-8 h-8 rounded-full mr-2 self-end" />
              <div className="bg-blue-100 rounded-lg p-3 max-w-[70%] shadow-sm">
                <p>Ya. I&apos;adding more team members to it.</p>
              </div>
            </div>

            <div className="flex mb-4 justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%] shadow-sm">
                <p>OK</p>
              </div>
              <img src="https://via.placeholder.com/30" alt="avatar" className="w-8 h-8 rounded-full ml-2 self-end" />
            </div>
          </div>

          {/* Message Input */}
          <div className="p-2 sm:p-3 bg-white border-t">
            <div className="flex items-center gap-1 sm:gap-2 bg-gray-50 rounded-full p-1 pl-2 sm:pl-3">
              <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                🎤
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Something..."
                className="flex-1 p-1 sm:p-2 bg-transparent focus:outline-none text-sm sm:text-base"
              />
              <button className="text-gray-500 hover:text-gray-700 mx-1 text-sm sm:text-base">
                📎
              </button>
              <button className="text-gray-500 hover:text-gray-700 mx-1 text-sm sm:text-base">
                📷
              </button>
              <button className="text-gray-500 hover:text-gray-700 mx-1 text-sm sm:text-base">
                😊
              </button>
              <button className="bg-blue-500 text-white p-1.5 sm:p-2 rounded-full hover:bg-blue-600">
                ➤
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile when sidebar is open */}
        {showSidebar && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
