import { Routes } from "~/types";
import { Button, SearchBar } from "~/common";
import BlackmarketLogo from "~/images/blackmarket_logo.svg";

export const NavBar = () => {
  return (
    <nav className="flex h-[91px] w-full justify-center bg-black px-4 py-2 text-white">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <a href={Routes.HOME}>
          <img src={BlackmarketLogo} alt="Black Market Logo" />
        </a>
        <div className="ml-12 flex grow justify-end">
          <SearchBar />
          <Button
            variant="outline"
            label="My Account"
            className="mx-4 mt-0 h-10 w-40 border-white py-2 text-white"
          />
          <Button
            variant="outline"
            label="Shopping Cart"
            className="mt-0 h-10 w-40  border-white py-2 text-white"
          />
        </div>
      </div>
    </nav>
  );
};
