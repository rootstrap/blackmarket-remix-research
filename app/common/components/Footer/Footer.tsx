import { LinksSection } from "./LinksSection";
import { LogosSection } from "./LogosSection";
import { NewsletterSection } from "./NewsletterSection";

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
