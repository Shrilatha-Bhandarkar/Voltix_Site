import ContactForm from "../components/ContactForm";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false); 
        }
      };
  
      fetchData();
    }, []);
    return ( 
        <div>
            {isLoading ? <Preloader /> : null}
            <div className="container-fluid form mar">
                {/* <div className="row">
                    {/* <div className="col-md-6">
                        <ContactForm />
                    </div> */}
                   {/* {
                    <div className="container">
                    <div className="balloon-container">
                      <svg className="balloon" width="99px" height="115px" viewBox="0 0 99 115" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="event1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <path d="M42.7091612,19.7665917 C31.6159462,22.6856018 22.9403378,28.3745782 19.9218723,39.5303712 C19.3181792,41.7772778 20.6757801,44.0973003 22.9403378,44.696288 C25.2020613,45.2952756 27.5431434,43.9482565 28.1468365,41.7013498 C29.8813914,35.0393701 38.3330948,29.6484814 44.9737189,27.9274466 C47.1617521,27.3284589 48.519353,25.0056243 47.9156599,22.6856018 C47.3119668,20.4386952 44.9737189,19.091676 42.7091612,19.7665917 L42.7091612,19.7665917 Z M49.5,8.38582677 C56.7443172,8.38582677 90.4746064,15.5736783 90.4746064,46.268279 C90.4746064,76.9656918 49.5,89.7665917 49.5,89.7665917 C49.5,89.7665917 8.52822788,76.9656918 8.52822788,46.268279 C8.52822788,15.5736783 42.2556828,8.38582677 49.5,8.38582677 L49.5,8.38582677 Z M49.4263098,98.1524184 L56.517578,106.839145 L42.4087317,106.839145 L49.4263098,98.1524184 L49.4263098,98.1524184 Z M49.5,0 C34.7874606,0 0,9.65691789 0,46.268279 C0,74.7187852 25.6555397,90.2924634 40.3709133,95.832396 L35.6178929,101.895388 C33.6537647,104.367267 33.3533352,107.73622 34.7874606,110.506187 C36.221586,113.203037 39.1635271,115 42.4087317,115 L56.517578,115 C59.7627827,115 62.7812482,113.203037 64.1388491,110.430259 C65.5729745,107.663105 65.2725451,104.291339 63.3084168,101.822272 L58.4817063,95.908324 C73.1942456,90.5905512 99,74.7187852 99,46.268279 C99,9.65691789 64.2153736,0 49.5,0 L49.5,0 Z" id="balloon" fill="#FFFFFF"></path>
                      </g>
                  </svg>
                    </div>
                    <div className="lines" id="line1"></div>
                    <div className="lines" id="line2"></div>
                    <div className="lines" id="line3"></div>
                    <div className="lines" id="line4"></div>
                  </div>
                   }
                     */}
                    <ContactForm />
            </div>
        </div>
     );
}
 
export default ContactPage;