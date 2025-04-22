import React from 'react';
import image from './page-found-concept-illustration_114360-1869.avif';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

const Notfound = () => {
  const styling = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      marginTop : "80px"
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  };

  return (
    <div>

    <div style={styling.container}>
      <Home/>   
      <img src={image} alt="Not Found" style={styling.img} />
    </div>
      <Footer/>
    </div>
  );
};

export default Notfound;
