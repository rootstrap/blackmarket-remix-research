import { Routes } from '~/types';
import { Button, SearchBar } from '~/common';
import BlackmarketLogo from '~/images/blackmarket_logo.svg';
import ChevronDownIcon from '~/icons/chevron_down_icon.svg';
import ShoppingCartIcon from '~/icons/shopping_cart_icon.svg';

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
            label={
              <div className="flex w-full items-center justify-between text-sm">
                My Account
                <img src={ChevronDownIcon} alt="" className="h-6 w-6" />
              </div>
            }
            className="mx-4 mt-0 h-10 w-40 border-white py-2 pl-4 pr-2 text-white"
          />
          <Button
            variant="outline"
            label={
              <div className="flex w-full items-center justify-between text-sm">
                Shopping Cart
                <img src={ShoppingCartIcon} alt="" className="h-[14px] w-4" />
              </div>
            }
            className="mt-0 h-10 w-40 border-white py-2 px-4 text-white"
          />
        </div>
      </div>
    </nav>
  );
};
