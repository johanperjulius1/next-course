import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from '@/components/MainHeader/MainHeaderBackground/main-header-background';
import NavLink from '@/components/MainHeader/NavLink/nav-link';
import logo from '@/assets/logo.png';
import styles from './main-header.module.css';

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo} priority alt="A plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse meals</NavLink>
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