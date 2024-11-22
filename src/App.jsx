import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer';

const App = () => {
  const handleDonate = (projectId, amount) => {
    console.log(`Donated ${amount} to project ${projectId}`);
    // Handle donation logic here (e.g., save to database)
  };
  return (
    <div>
      
       <Navbar />
      <main>
        <Outlet context={{ onDonate: handleDonate }} /> {/* Pass the onDonate function */}
      </main>
      <Footer />
    </div>
  )
}

export default App