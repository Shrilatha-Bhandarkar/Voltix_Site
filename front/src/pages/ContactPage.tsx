import ContactForm from "../components/ContactForm";
import './styles/ContactPage.css'
const ContactPage = () => {
    return ( 
        <div>
            <div className="container form">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactPage;