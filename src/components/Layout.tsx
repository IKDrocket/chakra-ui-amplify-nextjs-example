import { ReactNode } from 'react';

import { Header } from '@/components/Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__container">{children}</main>
    </div>
  );
};
