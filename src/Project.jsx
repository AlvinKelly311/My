import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import smile from './assets/smile.avif'
import school2 from './assets/school2.avif'
import target from './assets/target.avif'; 
const Project = () => {
  return (
    
    <div className='body'>
      <Navbar />

      

      <div className='images'>
      <div className='imgg'>
        
        <img src={smile} />
        <h1>Homeless kids</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque natus, voluptas doloribus, laboriosam earum nisi maxime error sed eos delectus, tempore labore? Tempore animi nulla laborum beatae in incidunt eveniet?</p>
        <Link to='/DonationForm'><button>Project</button></Link>
        <hr />
      </div>

     

      <div className='shool md:w-1'> 
        <img src={school2} />
        <h1>School for the kids</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque natus, voluptas doloribus, laboriosam earum nisi maxime error sed eos delectus, tempore labore? Tempore animi nulla laborum beatae in incidunt eveniet?</p>
        <Link to='/DonationForm'><button>Project</button></Link>
        <hr />
      </div>
      
      

      <div className='imm'>
        <img src={target} />
        <h1>Estate Investment</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque natus, voluptas doloribus, laboriosam earum nisi maxime error sed eos delectus, tempore labore? Tempore animi nulla laborum beatae in incidunt eveniet?</p>
        <Link to='/DonationForm'><button>Project</button></Link>
      </div>
      
      </div>

      
    </div>
  
  )
}

export default Project