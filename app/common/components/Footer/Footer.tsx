import { Routes } from "~/types";
import BlackmarketLogo from "~/images/blackmarket_logo.svg";
import InstagramIcon from "~/icons/instagram_icon.svg";
import FacebookIcon from "~/icons/facebook_icon.svg";
import TwitterIcon from "~/icons/twitter_icon.svg";
import LinkedInIcon from "~/icons/linkedin_icon.svg";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";

const LinksSection = () => {
  return (
    <div className="mb-8 flex flex-col justify-between md:flex-row">
      <div className="flex flex-col">
        <h5 className="text-base font-bold text-white">Restored furniture</h5>
        <a href="/" className="mt-4 text-base text-white">
          Entries
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Rates
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Categories
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Sale
        </a>
      </div>
      <div className="flex flex-col">
        <h5 className="text-base font-bold text-white">Stay connected</h5>
        <a href="/" className="mt-4 text-base text-white">
          Instagram
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Tik Tok
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Facebook
        </a>
      </div>
      <div className="flex flex-col">
        <h5 className="text-base font-bold text-white">Black Market</h5>
        <a href="/" className="mt-4 text-base text-white">
          Our history
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Staff
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Work with us
        </a>
      </div>
      <div className="flex flex-col">
        <h5 className="text-base font-bold text-white">Support</h5>
        <a href="/" className="mt-4 text-base text-white">
          Chat
        </a>
        <a href="/" className="mt-4 text-base text-white">
          Address
        </a>
      </div>
    </div>
  );
};

const LogosSection = () => {
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

const NewsletterSection = () => {
  return (
    <div className="w-1/3 text-white">
      <h3 className="text-2xl font-bold">
        Subscribe to our weekly newsletter!
      </h3>
      <InputField name="email" label="Email" placeholder="Type your email" />
      <Button
        variant="outline"
        label="Subscribe"
        className="mb-4 w-full border-white py-2 text-white"
      />
      <p className="text-sm">
        By subscribing you agree to receive weekly emails with our latest news
        and updates.
      </p>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-black">
      <div className="flex w-full max-w-6xl px-4 pt-9 pb-14">
        <div className="mr-16 flex w-2/3 flex-col-reverse justify-between md:flex-col">
          <LinksSection />
          <LogosSection />
        </div>
        <NewsletterSection />
      </div>
    </footer>
  );
};
