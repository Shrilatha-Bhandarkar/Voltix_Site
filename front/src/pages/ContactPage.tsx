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
                    <ContactForm />
            </div>
        </div>
     );
}
 
export default ContactPage;