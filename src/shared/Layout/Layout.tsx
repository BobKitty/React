import React from 'react';
import stylesScss from './layout.scss';
import {hot} from "react-hot-loader/root";

interface ILayoutProps {
  children?: React.ReactNode;
}

function LayoutComponetns({ children }:ILayoutProps) {
  return (
    <div className={stylesScss.layout}>
      {children}
    </div>
  );
}

export const Layout = hot(LayoutComponetns);
