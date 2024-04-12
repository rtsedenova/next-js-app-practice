import Link from 'next/link';
import NavLink from './nav-link';

import classes from './header.module.css';

export default function Header() {
  return (
    <>
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        NextJS Food App
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
    </>
  );
}