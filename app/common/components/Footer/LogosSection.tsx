import { Routes } from '~/types';
import BlackmarketLogo from '~/images/blackmarket_logo.svg';
import InstagramIcon from '~/icons/instagram_icon.svg';
import FacebookIcon from '~/icons/facebook_icon.svg';
import TwitterIcon from '~/icons/twitter_icon.svg';
import LinkedInIcon from '~/icons/linkedin_icon.svg';

export const LogosSection = () => {
  return (
    <div className="flex w-full justify-between">
      <a href={Routes.HOME}>
        <img src={BlackmarketLogo} alt="Black Market Logo" />
      </a>
      <div className="flex justify-end">
        <a href="/" className="mr-4">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="/" className="mr-4">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="/" className="mr-4">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="/" className="">
          <img src={LinkedInIcon} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};
