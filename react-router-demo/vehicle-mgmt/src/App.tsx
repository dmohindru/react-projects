import React from 'react';
import { getCurrentUser } from './data';
import { redirect } from 'react-router-dom';

export const loader = async (): Promise<Response | null> => {
  // const user = await getCurrentUser();
  // if (user) {
  //   return redirect('/vehicles');
  // } else {
  //   return redirect('/login');
  // }
  return null;
};

export const App: React.FC = () => {
  return <></>;
};
