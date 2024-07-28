import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className='flex justify-between'>
          <div className="w-1/2 md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-bold">audiophile</h1>
            <p className="text-gray-400 mt-2">
              Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.
            </p>
          </div>
          <nav className="w-1/2 md:w-1/3 mb-6 md:mb-0 text-center">
            <ul className="flex justify-centre md:justify-start space-x-6">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/detail" className="text-gray-400 hover:text-white">Headphones</a></li>
              <li><a href="/speaker" className="text-gray-400 hover:text-white">Speakers</a></li>
              <li><a href="/earphone" className="text-gray-400 hover:text-white">Earphones</a></li>
            </ul>
          </nav>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="flex-row space-x-6">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 text-gray-400 mt-6">
          &copy; 2021. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
