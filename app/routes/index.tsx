import { Outlet } from '@remix-run/react';
import { MainLayout } from '~/layouts';

const Index = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Index;
