import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
import  './styles/Page.css';
const HomePage = () => {
    return ( 
        <div className="container one mar">
            <div className="services">
                <HomeService />
                <HomeProject />
                <HomeTestimonial />
            </div>
        </div>
     );
}
 
export default HomePage;