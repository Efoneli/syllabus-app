import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface GlobalLayoutProps {
  children: ReactNode; // or JSX.Element
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <Navbar children={children} />
      {children}
    </>
  );
}
