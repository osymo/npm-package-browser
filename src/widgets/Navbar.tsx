import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';


interface Menu {
    key: number;
    title: string;
    link: string;
}

const menus: Menu[] = [
    {title: 'Package Browser', link: '/', key: 1},
    {title: 'About', link: '/about', key: 2},
]

export function Navbar() {
    return <nav className={styles.NavbarWrapper}>
                {menus.map(m => <Link className={styles.InlineListItem} key={m.key} to={m.link}>{m.title}</Link>)}
           </nav>
}