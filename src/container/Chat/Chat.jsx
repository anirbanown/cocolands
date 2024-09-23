import React, { useState, useEffect } from 'react';
import "../../App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaComments, FaTimes, FaRocketchat } from "react-icons/fa";

import { AiFillRobot, AiFillCloseSquare } from 'react-icons/ai';

const gemi = process.env.REACT_APP_GEM_API;
console.log(gemi);


function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false); // For toggling chatbox

  // Sample product data
  const products = [
  ];

  useEffect(() => {
    console.log("API Key:", gemi);
  }, []);

  // Function to handle form submission
  async function generateAnswer(e) {
    e.preventDefault();
    setGeneratingAnswer(true);
    
    // Check if the question includes "BharatSe"

    setAnswer("Loading your Personalized Answer...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAfH8ay-86RjWqG4YC1dNGPNJntyC5_jHk`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: "You are Bharati, an AI Assistant for our ecommerce marketplace named BharatSe. talk as a friend and also as a customer support executive. We are a platform that sells various Indian ethnic and heritage products across the world. We specialize in Clothings, food etc. You must answer signifying and promoting the various traditional items of India. Answer politely and Use Emojis but answer short and crisp manner. Also don't answer any questions unrelated to the shopping or our e commerce platform. Politely reject the answer for any other questions" + question }] }],
        },
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setQuestion(""); // Clear the question after generating the answer
    setGeneratingAnswer(false);
  }

  // Function to handle Enter key press in the textarea
  function handleKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();  // Prevent adding a new line
      generateAnswer(e);    // Trigger the form submission
    }
  } 

  return (
    <div className=''>
      {/* Floating Button with Icons */}
      <div className={`${isHover?'bg-bharatiai-hover':''} fixed z-9999 bottom-8 right-8 h-max w-max border-2 border-green-500 flex flex-row rounded-5xl justify-end items-center shadow-lg bg-bharatiai  transition-all  duration-350`}>
        <div className={`text-2xl text-orange-600 flex justify-center items-center w-control h-control  transition-all delay-150 duration-350 overflow-x-hidden`}>Bharati<span className="text-green-600">.AI</span></div>
        <div
          className="p-4 text-white transition-all duration-300 transform scale-110 bg-orange-500 rounded-full cursor-pointer w-max z-9999 hover:bg-orange-600 hover:scale-125"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>{!isOpen && setIsHover(false)}}
        >
          {isOpen ? (
            <FaTimes size={24} />  // Close icon when open
        
          ) : (
            // <FaComments size={24} />  // Chat icon when closed
            <FaRocketchat className='text-2xl'/>
          )}
        </div>
      </div>

      {/* Larger Animated Chatbox */}
      <div
        className={`fixed z-9999 bottom-28 right-6 shadow-5xl w-96 h-[30rem] rounded-lg shadow-lg p-6 flex flex-col transition-all duration-500 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 "
        } bg-chatbot chatbox-responsive`}
        style={{ transformOrigin: "bottom right" }} // Animation origin for smooth open/close
      >
        {/* Heading with Animation */}
        <h2 className="mb-4 text-2xl font-bold text-orange-500">
          Personalized <span className='text-green-600'>AI Assistant</span> 
        </h2>

        <form onSubmit={generateAnswer} className="flex flex-col flex-grow">
          <textarea
            required
            className="w-full p-3 my-2 text-white placeholder-white transition-all bg-transparent border border-white rounded outline-none focus:outline-none focus:shadow-xl"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
            onKeyDown={handleKeyDown}  // Add the key down listener here
          ></textarea>
          <button
            type="submit"
            className={`bg-orange-500 hover:bg-orange-700 text-white p-3 rounded-md mt-2 transition-all duration-300 genarate ${
              generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={generatingAnswer}
          >
            Send Message
          </button>
        </form>

        {(answer!="" || generatingAnswer) && <div className="h-56 p-2 px-3 pr-5 mx-3 my-5 overflow-auto text-white bg-gray-100 rounded-lg p-3mt-4 bg-gray-chatbox">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>}
      </div>
    </div>
  );
}

export default Chat;