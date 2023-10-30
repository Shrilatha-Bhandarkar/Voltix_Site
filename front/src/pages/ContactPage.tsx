import ContactForm from "../components/ContactForm";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return ( 
        <div>
            {isLoading ? <Preloader /> : null}
            <div className="container form mar">
                {/* <div className="row">
                    {/* <div className="col-md-6">
                        <ContactForm />
                    </div> */}
                    <ContactForm />
            </div>
        </div>
     );
}
 
export default ContactPage;