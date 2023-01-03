import BlackMarketAuthBg from '../images/BlackMarketAuthBg.png';

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0">
        <img className="h-full w-full bg-repeat-y object-cover" src={BlackMarketAuthBg} alt="Black Market" />
      </div>
      <div className="relative flex px-3 pt-6 text-white sm:w-full sm:px-10 md:w-2/3 lg:w-2/5 xl:w-1/3">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
}
