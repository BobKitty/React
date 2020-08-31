import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.scss';

function HeaderComponent() {
    console.log(styles);
    return (
        <header>
            <h1 className={styles.example}>Reddit for our own!!! NEW HUY Leha</h1>
        </header>
    );
}

export const Header = hot(HeaderComponent);