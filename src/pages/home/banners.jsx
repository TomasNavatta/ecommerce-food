import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../components/stylesshets/home.css'


function Banners() {


  return (
    <div className='header-content container'>
      <div className='swiper mySwiper-1'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <div className='slider'>
              <div className='slider-text'>
                <h1>Hamburguesa</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sed praesentium velit? Nulla saepe cupiditate ipsam laudantium labore sequi quos nostrum alias, veritatis dolor, odio ad est, maxime ea minima?
                </p>
                <div className='botones'>
                  <button className='btn-1'>Promociones</button>
                  <button className='btn-1'>Menu</button>
                </div>
              </div>
              <div className='slider-img'>
                <img src='../assets/burguer-portada.png'/>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Banners;