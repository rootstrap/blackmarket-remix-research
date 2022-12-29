import { NavBar, Footer } from "~/common";

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="w-full">
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}
