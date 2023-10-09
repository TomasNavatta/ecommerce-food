import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../components/stylesshets/home.css'


function Banners() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img className='imgBanner' src='../../assets/banner_segundo.jpeg'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imgBanner' src='../../assets/banner_principal.jpeg'/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imgBanner' src='../../assets/banner_tercero.jpeg'/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banners;