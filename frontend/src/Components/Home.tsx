import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const imageSrc1 = require('../images/FirstHome.png');
  const imageSrc2=require('../images/sphere nw.png');
  const imageSrc3=require('../images/obj.png')
  return (
    <div className='main'>
      <div className="container">
        <img src={imageSrc1} alt="Image" className="image" />
        <div className="textStyleLarge1"><p>Bring your <br></br>ideas to life!</p></div>
        <div className="textStyleMedium1">Our team of talented and highly committed professionals<br></br> 
                                       is the key to our success in creating business solutions.</div>
      </div>
      <div className='container'>
         <img src={imageSrc2} alt="Image" className="image" />
         <div className="textStyleLarge2"><p>Our actions and motivations!</p></div>
         <div className="textStyleMedium2">Our skilled and dedicated team plays a significant role in our<br></br>  ability to
                                          successfully develop business solutions.</div>
         {/* <section id="action">
          <div className="row">
           <div className="col-md-4">
             <div className="card">
               <div className="card-body">
                 <h5 className="card-title">Mobile Application</h5>
                 <p className="card-text">Business will increasingly rely on mobile apps. You're missing out if you don't use a mobile device.</p>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="card">
               <div className="card-body">
                 <h5 className="card-title">Web Development</h5>
                 <p className="card-text">A professionally designed website can aid in building credibility and trust with potential clients.</p>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="card">
               <div className="card-body">
                 <h5 className="card-title">Software Development</h5>
                 <p className="card-text">Innovation in software affects markets, goods, and customer service.</p>
               </div>
             </div>
           </div>
         </div>
         </section> */}
      <div className="container">
        <img src={imageSrc3} alt="Image" className="image" />
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
