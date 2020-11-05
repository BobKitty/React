import React from 'react';
import stylesScss from './_header.scss';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";

export function Header() {
  return (
    <header className={stylesScss.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
