import React from 'react';
import '../Home/Home.css';
import Card_Navbar from '../Card_Navbar.jsx';
import Footer from '../Card_footer.jsx';
import Expertise from '../Card_Expertise.jsx';
import '../Card_Expertise.css';
import Selcted from '../Card_Selected.jsx';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';


const Home = () => {
 
 

  return (
    <div className='Home_start'>
      <Card_Navbar />
      <div className='Card_Expertise_main'>
        <div className='Card_Expertise_My'>
          <p style={{ 'margin': '0px' }}>My Expertise</p>
        </div>
      </div>
      <div className='Card_home_Expertise'>
        <div style={{ 'marginRight': '3%' }}>
          <Expertise title={'Front-end Design'} sentence={'Banglore where I am a full time software engineer.'} />
        </div>
        <div style={{ 'marginRight': '3%' }}>
          <Expertise title={'Back-end Development'} sentence={'Banglore where I am a full time software engineer.'} />
        </div>
        <div>
          <Expertise title={'Full-stack Development'} sentence={'Banglore where I am a full time software engineer.'} />
        </div>
      </div>
      <div className='Card_main_selected'>
        <div className='Card_main_selected_portfolios'>
          <p style={{ 'margin': '0px' }}>Selected Portfolios</p>
        </div>
        <div className='Card_selected_gallerys'>
          <div>
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
