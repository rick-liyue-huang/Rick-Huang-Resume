import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import useOnClickOutside from '../hooks/ClickOutside';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const mobileNav = useRef<any>();
  useOnClickOutside(mobileNav, () => setIsActive(false));

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.inner}>
        {/* LEFT SIDE */}
        <div className={styles.me}>
          <Link href={'/'}>
            <a>
              {/* <span>HOME</span> */}
              <div className={styles.profile}>
                <Image
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  src="/navbarlogo.jpeg"
                  alt=""
                />
              </div>
            </a>
          </Link>
        </div>
        {/* RIGHTSIDE */}
        <ul className={styles.nav_list}>
          <li>
            <Link href="#">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#features">
              <a>Features</a>
            </Link>
          </li>
          {/* <li>
            <Link href="#pricing">
              <a>Pricing</a>
            </Link>
          </li> */}
          <li>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
          <div className={styles.mobile}>
            <button
              onClick={() => {
                setIsActive(true);
              }}
            >
              <FaBars />
            </button>
          </div>
        </ul>
      </nav>
      {/* MOBILE NAVIGATION */}
      <div
        className={`${styles.mobileNav} ${
          isActive ? undefined : styles.notActive
        }`}
      >
        <nav ref={mobileNav}>
          {isActive && (
            <ul className={styles.mobileNavList}>
              <div className={styles.close}>
                <button
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <FaTimes />
                </button>
              </div>
              <li onClick={() => setIsActive(false)}>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#resume">
                  <a>Resume</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#features">
                  <a>Features</a>
                </Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  fixed: false,
};

export default Navbar;
