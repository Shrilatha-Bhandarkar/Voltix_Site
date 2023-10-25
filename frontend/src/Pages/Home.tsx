import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className='container-fluid p-0'>
      <div className="container-row m-0">
        <div className="textStyleLarge1"><p>Bring your <br></br>ideas to life!</p></div>
        <div className="textStyleMedium1">Our team of talented and highly committed professionals<br></br> 
                                       is the key to our success in creating business solutions.</div>
      </div>
      <div className='container'>
         <div className="textStyleLarge2"><p>Our actions and motivations!</p></div>
         <div className="textStyleMedium2">Our skilled and dedicated team plays a significant role in our<br></br>  ability to
                                          successfully develop business solutions.</div>
      <div className="container-row m-0">
        <div className="textStyleLarge2"><p>Check out our Projects</p></div>
        <div className="textStyleMedium3">Our endeavours serve as examples of our dedication to excellence.</div>
        <div className="textStyleLarge4"><p>Trusted by Millions of Customers.</p></div>
        <div className="textStyleMedium4">We have been successful in developing business<br></br> solutions in large part because of our talented and <br></br>devoted workforce.</div>
      </div>
      </div>
    </div>
  );
};

export default Home;