import {React, Suspense,useState} from 'react';
import { About, Collection, Create, Discover, Home, Top } from './container';
import { Navbar, Footer } from './components';
import Chat from './container/Chat/Chat.jsx';
import './App.css';
import bgvideo from './asset/bgvid.mp4'
// import { Canvas } from '@react-three/fiber'
// import IndiaGate from './container/Scene/IndiaGate.jsx';

import Loader from './components/Loader/Loader.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
 
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
  return(
    // <>
    // {isLoading? <Loader/> :  }
   
    // </>
    <div className=''>
  
    <div clasName="h-screen w-screen p-0 mx-0 overflow-hidden flex justify-center items-center"><video className="object-cover w-screen h-screen px-0 mx-0 overflow-x-hidden" autoplay="true" loop="true" muted><source src={bgvideo} type="video/mp4" /></video>
      <div className='absolute top-0 flex items-center justify-center w-full h-screen -z-2'>
        <div class="flex flex-col h-max text-white text-xl px-8 branding">
          <h1 className='text-center text-7xl Bharat'>Bharat<span class="text-green-700">Se</span></h1>
          <p className='my-5 text-3xl text-center'>Your Gateway to the Heart of India's Cultural Roots and Ethnic Heritage</p>
          <a href='#home' className='block mx-auto h-max w-max'><button className='px-5 py-3 button_3'>Get Started</button></a>
        </div>
      </div>
    </div>
    <Home />
    <About />
    <Top />
    <Collection />
    <Create />
    <Discover />
    <Chat />
    
  </div>
  
)}

export default App;