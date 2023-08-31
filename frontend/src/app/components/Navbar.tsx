'use client' 
import React, { useState } from 'react'; 
import Link from "next/link";
import Image from 'next/image';

import styles from '../styles/scss/styles.module.scss';
import { FaSearch, FaShoppingCart, FaChevronDown, FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/images/target.png';

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [useDropdownVisible, setUseDropdownVisible] = useState(false);

  const handleSearchChange = (event: any) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    console.log('Search term:', newSearchTerm);
  };

  const toggleUseDropdown = () => {
    setUseDropdownVisible(!useDropdownVisible); // Step 2
  };

  return (
    <div className={styles.navbar}>
    <div className={styles.navbar_block}>
      <div className={styles.logo}>
    <Link href="/">
      <Image src={Logo} 
             width={64} 
             alt="logo" />
    </Link>
    </div>
    <div className={styles.navbar_links}>
      <ul>
      <li onClick={toggleUseDropdown}>   
        <Link href="/">Categories
          <FaChevronDown size={12} id={styles.caret} />
        </Link>
        <div className={styles.navbar_links_dropdown}>
         {useDropdownVisible && (
          <ul>
            <li>
              <Link href="/college">College</Link>
            </li>
            <li>
              <Link href="/readyforschool">Ready for School</Link>
            </li>     
          </ul>
              )}
         </div>
      </li>
      <li onClick={toggleUseDropdown}>
        <Link href="/">What's New
          <FaChevronDown size={12} id={styles.caret} />
        </Link>
        <div className={styles.navbar_links_dropdown}>
         {useDropdownVisible && (
          <ul>
            <li>
              <Link href="/college">Target New Arrivals</Link>
            </li>
            <li>
              <Link href="/readyforschool">Target Finds</Link>
            </li>    
            <li>
              <Link href="/targetstyle">#TargetStyle</Link>
            </li>  
          </ul>
              )}
         </div>
      </li>
        <li onClick={toggleUseDropdown}>
      <Link href="/">Pickup & Delivery
        <FaChevronDown size={12} id={styles.caret} />
      </Link>
      <div className={styles.navbar_links_dropdown}>
         {useDropdownVisible && (
          <ul>
            <li>
              <Link href="/college">Shop Order Pickup</Link>
            </li>
            <li>
              <Link href="/readyforschool">Shop Same Day Delivery</Link>
            </li>    
          </ul>
              )}
         </div>
        </li>
    </ul>

    </div>
    
    <div className={styles.navbar_search}>
    <input
          className="searchbar"
          type="text" 
          onChange={handleSearchChange}
          placeholder="What can we help you find..." />
          <div className="search-icon">
            <a>
              <FaSearch color="grey" />
            </a>
    </div>
    </div>
    
    <div className={styles.navbar_signUp}>
      <ul>
        <li>
          <Link href="/signup">
            <FaUserCircle size={24} id={styles.user_icon} />Sign Up
            <FaChevronDown size={12} id={styles.caret} />
          </Link>
        </li>
      </ul>
    </div>
    <div className={styles.navbar_cartIcon}>
      <ul>
        <li>
          <FaShoppingCart size={22} />
            <span>0</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
  )
}
