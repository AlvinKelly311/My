import React from 'react';
import { Carousel } from 'react-bootstrap';
import estaeImage from './assets/estae.jpeg'; 
import schoolImage from './assets/school.avif'; 
import foodImage from './assets/food.webp';
import Navbar from './Navbar';


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
      <Carousel  style={{ margin: '10rem 4rem', position:"relative", left:"30.7rem"}} >
        <Carousel.Item>
          <img className="d-block" src={estaeImage} alt="First slide"  style={{height:'35rem', width:"65rem"}}/>
          <h5 style={{position:'relative', top:'1rem'}}>Invest in RealEstates</h5>
          <p style={{position:'relative', top:'1rem'}}>Real estate crowdfunding has grown 20% YoY since 2019.</p>
    
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={schoolImage} alt="Second slide"  style={{ width:"65rem", height:'35rem'}}/>
          <h5 style={{position:'relative', top:'1rem'}}>School Construction</h5>
          <p style={{position:'relative', top:'1rem'}}>Every $1 invested in education returns $10 in economic growth.</p>
          

        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={foodImage} alt="Third slide" style={{ width:"65rem", height:'35rem'}}/>
          <h5 style={{position:'relative', top:'1rem'}}>Food for the kids</h5>
          <p style={{position:'relative', top:'1rem'}}>1 in 6 children worldwide suffer from hunger. Let's changex this.</p>

        </Carousel.Item>
       
      </Carousel>

      </div>
     
    </div>
  );
}

export default Home;