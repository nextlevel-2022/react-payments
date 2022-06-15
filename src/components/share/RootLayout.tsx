import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="root">
      <div className="app">{children}</div>
    </div>
  );
};

export default RootLayout;
