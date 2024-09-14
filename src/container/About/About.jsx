import React from 'react';
import { AiOutlineWallet,AiOutlineStar, AiOutlineBarChart, AiOutlineCrown, AiOutlineTeam  } from 'react-icons/ai';
import images from '../../constants/images';
import './About.css';


const About = () => {
  return (
    <div className='my-12 flex flex-row w-full px-16 py-16 about-bg about-flex'>
      <div className='flex flex-col w-1/3 pr-5 justify-center india-post-div'>
        <div className="app__about-content-1 pr-10 pb-8">
        <h1>SEAMLESS DELIVERIES ACROSS THE WORLD WITH OUR VERY OWN</h1>
      </div>
      <div className="flex app__about-content-1 content-center">
          <img className="relative ps-6 w-24 rounded-lg content-center" src={images.IndianPost} alt="Image Collection 2" />
          <h1 className='text-center align-middle mx-3.5 m-3 text-red-700'>India Post</h1>
        </div>
      </div>
        <div className='app__about features-about'>
      
      <div>
        <div className='app__about'>
        <div className="app__about-content-2">
          <AiOutlineWallet className='icon'/>
          <div>
            <h2>FAST, SECURE & DECENTRALISED</h2>
            <p className='p__font1'>Our USDT transactions are fastest. Our ERC721 Blockchain Integration ensures Transparency and Security</p>
          </div>
        </div>
        <div className="app__about-content-3">
          <AiOutlineStar className='icon' />
            <div>
              <h2>NFT QUALITY ASSURANCE</h2>
              <p className='p__font1'>Whenever You Buy a Product the Respective Product NFT gets delivered to you showing Authenticity & Ensuring Quality from Real Seller</p>
            </div>
        </div>
            </div>
            <div className='app__about pt-10'>
        <div className="app__about-content-2">
          <AiOutlineCrown className='icon'/>
          <div>
            <h2>CUSTOMIZED PRODUCTS</h2>
            <p className='p__font1'>We Provide You what's the Best. Based on your HOME STATE, FESTIVALS, SEASONS etc. We take care that YOU get, what YOU WANT</p>
          </div>
        </div>
        <div className="app__about-content-3">
          <AiOutlineTeam className='icon' />
            <div>
              <h2>INDIAN ARTISTS & HERITAGE</h2>
              <p className='p__font1'>Our Platform Connects Small Scale Business & Artists to the World Market & we aim to preserve the Indian Culture & Rich Heritage</p>
            </div>
        </div>
            </div>
      </div>
    </div>
    
    </div>
    
  )
}

export default About;