import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px'}}>
      <AppBar />
      <div style={{ margin: '50px 0 0 0 ',  display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}} >
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};