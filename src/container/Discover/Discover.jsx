import React from 'react';
import { data } from '../../constants';

import './Discover.css';

const DiscoverCard = ({ discover: { imgUrl,profil_1,profil_2,profil_3,profil_4,title,icon,bid,amount,time}}) => (
  <div className='app__discover_card'>
    <div className="app__discover_card_head">
      <img className='nft__images' src={imgUrl} alt="NFT Images" />
    </div>
    <div className="app__discover_card_description">
      <h1 className='h2__font1'>{title}</h1>
      <div className='description_bid'>
        <div className='bid'>
          <img src={icon} alt="Etherum Icon" />
          <p className='p__font1'>{bid}</p>
        </div>
      </div>
    </div>
    <div className='app__discover_card_times'>
    </div>
  </div>
)

const Discover = () => {
  return (
    <div className='app__discover section__padding'>
      <div className="app__discover-head">
        <h1 className='h1__font2'>DISCOVER OUR PRODUCTS</h1>
        <ul>
          <li className='color__purple'><a href="#">All Categories</a></li>
          <li><a href="#">Art</a></li>
          <li><a href="#">Home Decor</a></li>
          <li><a href="#">Clothings</a></li>
          <li><a href="#">Ornaments</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Festive Items</a></li>
        </ul>
      </div>
      <div className="app__discover-content">
        {data.discovers.map((discover) => <DiscoverCard discover={discover} key={discover.title} /> )}
      </div>
      <div className="app__discover-button">
      </div>
    </div>
  )
}

export default Discover;