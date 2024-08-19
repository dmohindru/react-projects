import React from 'react';
import { redirect, Outlet } from 'react-router-dom';
import { getCurrentUser } from './data';

export const loader = async ({
  request,
}: {
  request: Request;
}): Promise<Response | null> => {
  const currentPath = new URL(request.url).pathname;
  const user = await getCurrentUser();
  if (user && currentPath === '/') {
    return redirect('/vehicles');
  } else if (!user && currentPath !== '/login') {
    return redirect('/login');
  }
  return null;
};

export const App: React.FC = () => {
  return <Outlet />;
};
