import React from 'react';
import '../Home/Home.css';
import Card_Navbar from '../Card_Navbar.jsx';
import About from '../Card_About.jsx';
import Footer from '../Card_footer.jsx';



const Home = () => {



  return (
    <div className='Home_start'>
      <Card_Navbar />
      <div className='my_protfolio'>
        <p >My Protfolio</p>
      </div>
      <About title={'About Us'} />

      <Footer />
    </div>
  );
};

export default Home;
