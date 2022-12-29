import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <main className="flex-grow container mx-auto p-6 gap-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
