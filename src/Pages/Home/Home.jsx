import React from 'react';
import './Home.css';
import Card_Navbar from '../Card_Navbar.jsx';
import Footer from '../Card_footer.jsx';
import About from '../Card_About.jsx';
import Experience from '../Card_Experience.jsx';
import Expertise from '../Card_Expertise.jsx';
import '../Card_Expertise.css';
import Selcted from '../Card_Selected.jsx';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
 
 

  return (
    <div className='Home_start w-auto h-auto flex flex-col justify-between'>
      <Card_Navbar />
      <div className='flex justify-between flex-col text-center m-auto mt-28 md:mt-48'>
        <div className='Home_hello md:text-5xl text-start'>
          <h4 style={{ 'margin': '0px' }}>HELLO<span className="line-after-o"></span></h4>
        </div>
        <div>
          <h1 className='Home_name md:text-9xl m-0 flex'>I AM ABHIRAM.</h1>
        </div>
        <div className='Home_Frontend'>
        <TypeAnimation
      sequence={[
        'Front-end developer',
        1000, 
        'Back-end developer',
        1000,
        'Full Stack developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}

    />
          <p style={{ "marginBottom": '15%' }}>Design Professional at PMV</p>
        </div>
      </div>
      <About title={'About'} />
      <Experience title={'Experience'} description={'Web Development'} date={'Jun 01 - Dec 01'} description1={'UI Designing'} date1={'Dec 01 - Feb 01'} />
      <div style={{ 'paddingBottom': '8%', 'background': '#670000' }}>
        <Experience title={'Education'} description={'ECE Engineering'} date={'2019 - 2023 '} description1={'Pre-University Course'} date1={'2017 - 2018'} />
      </div>
      <div className='flex flex-col justify-between pt-10 m-auto w-11/12'>
        <div className='Card_Expertise_My text-center text-7xl'>
          <p style={{ 'margin': '0px' }}>My Expertise</p>
        </div>
      </div>
      <div className='flex m-auto w-11/12 flex-col justify-between md:flex-row'>
        <div style={{ 'marginRight': '3%' }}>
          <Expertise title={'Front-end Design'} sentence={'Banglore where I am a full time software engineer.'} />
        </div>
        <div style={{ 'marginRight': '3%' }} className=' mt-0 md:mt-16'>
          <Expertise title={'Back-end Development'} sentence={'Banglore where I am a full time software engineer.'} />
        </div>
        <div>
          <Expertise title={'Full-stack Development'} sentence={'Banglore where I am a full time software engineer.'} />
        </div>
        
      </div>
      <div className='relative'>
        <div className='Card_main_selected_portfolios text-7xl m-auto flex w-11/12'>
          <p style={{ 'margin': '0px' }}>Selected Portfolios</p>
        </div>
        <div className='flex flex-wrap justify-between m-auto w-4/5 pt-6 pb-10'>
          <div className='gallerys'>
            <Selcted image={gallery1}/>
          </div>
          <div>
            <Selcted image={gallery2}/>
          </div>
          <div style={{'paddingTop':'2%'}}>
            <Selcted image={gallery3}/>
          </div>
          <div style={{'paddingTop':'2%'}}>
            <Selcted image={gallery4}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
