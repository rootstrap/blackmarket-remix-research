import { NavBar } from '~/common';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="w-full">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}
