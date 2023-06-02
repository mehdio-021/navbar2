import React ,{useEffect} from "react";
import "./Subscribe.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>مشترک شوید حالا!</h2>
        <form>
          <button>مشترک شوید</button>
          <input type="text" placeholder="ایمیل خود را وارد کنید ..." />
        </form>
        <div className="socials">
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
