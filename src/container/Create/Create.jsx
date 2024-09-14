import React from 'react';
import images from '../../constants/images';

import './Create.css';

const Create = () => {
  return (
    <div className='app__create section__padding'>
      <div className="app__create-left">
        <div className="app__create-left_main">
          <div className="left__main_1">
            <img className='create__nft object-cover' src={images.gradient_1} alt="Gradient 1" />
          </div>
          <div className="left__main_2">
            <img className='create__nft object-cover' src={images.gradient_2} alt="Gradient 1" />

          </div>
        </div>
        <div className="app__create-left_child">
            <img className='create__nft object-cover' src={images.gradient_3} alt="Gradient 1" />
        </div>
      </div>
      <div className="app__create-right">
        <h1 className='h1__font2'>Not another Regular Ecommerce Platform</h1>
        <h1 className='h1__font2'>WE ARE ONE & UNIQUE !</h1>
        <p className='p__font1'>Our platform connects the global Indian diaspora with local artisans, MSMEs, and sellers in India, offering authentic traditional products like Puja Samagri, ethnic attires, and handicrafts. By leveraging AI/ML for product recommendations and customer segmentation, it ensures tailored offerings based on individual needs and seasonal demands. Seamless integration with India Post guarantees affordable, reliable shipping, while fostering a strong emotional connection to Indian roots.</p>
      </div>
    </div>
  )
}

export default Create;