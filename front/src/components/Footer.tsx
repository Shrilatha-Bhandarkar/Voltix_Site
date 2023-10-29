import './styles/footer.css'
import 'boxicons/css/boxicons.min.css';
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Voltix Solution</h3>
            <p>
              We are not afraid to say no to projects that we cannot do well. We
              would rather focus on a few projects and do them right than take
              on too much and sacrifice quality.
            </p>
            <a href='https://www.facebook.com/voltixsoluti0n/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0'>
              <i className='bx bxl-facebook-circle'></i></a>
            <a href='https://www.instagram.com/voltix_solution/'>
              <i className='bx bxl-instagram-alt' ></i></a>
            <a href='https://www.linkedin.com/company/voltix--solution/'>
              <i className='bx bxl-linkedin-square' ></i></a>
            <a href='https://www.youtube.com/@voltixsolution'>
              <i className='bx bxl-youtube' ></i></a>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FVoltixSolution'>
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/About">About Us</a>
              </li>
              <li>
                <a href="/Contact">Get in touch</a>
              </li>
              <li>
                <a href="/FAQ">Help & FAQs</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Information</h3>
            <p>
              Kinfra Calicut - Near Calicut University, Chelambra P.O
              Kakkancherry, Malappuram, Kerala. 673634
            </p>
            <p>+91 80893 25152</p>
            <p>voltixsolution@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
