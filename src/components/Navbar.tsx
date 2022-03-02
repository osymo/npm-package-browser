import React from "react";
import styles from './Navbar.module.css';


interface Menu {
    key: number;
    title: string;
    link: string;
}

const menus: Menu[] = [
    {title: 'Package Browser', link: '/', key: 1},
    {title: 'Package', link: '/', key: 2},
    {title: 'About', link: '/about', key: 3},
]

export function Navbar() {
    return <nav className={styles.NavbarWrapper}>
        <ul>
            {menus.map(m => <li className={styles.InlineListItem} key={m.key}><a href={m.link}>{m.title}</a></li>)}
        </ul>
    </nav>
}