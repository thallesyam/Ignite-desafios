import Link from 'next/link';

import styles from './header.module.scss';
import Logo from '../../assets/Logo';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
    </header>
  );
}
