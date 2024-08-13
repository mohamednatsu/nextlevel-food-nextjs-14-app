import React from 'react'

import logo from "@/assets/logo.png"
import Link from 'next/link'

import classes from "./main-header.module.css"
import Image from 'next/image'
import NavLink from './nav-link'

export default function MainHeader() {
    return (
        <header className={classes.header}>
        <Link href='/' className={classes.logo}>
            <Image priority src={logo} alt="" />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>

        </header>
    )
}