import React from 'react';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Widgets from './components/Widgets';


function App() {
  let App = ''

  return (
    <div className='app'>
      <NavBar />
      <Widgets />
        <div className='relative flex justify-center mt-10 mx-auto'>
          <p className='absolute top-1/2 text-center h-'>*Menu limited. Restricted delivery area. Available in participating locations only. Fees subject to change. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked. See the Uber Eats app for details.</p>
        </div>
      <div className='shadow-md w-full mt-20 h-10'></div>
      
      <Footer />
    </div>
  );
}

export default App;
