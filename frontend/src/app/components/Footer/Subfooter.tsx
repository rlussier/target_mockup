'use client'
import React, { Component } from 'react'
import styles from '../../styles/scss/styles.module.scss';
import { FaPinterest, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';
import Link from "next/link";

type Props = {}

type State = {}

export default class Subfooter extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.subfooter}>
        <div className={styles.subfooter_container}>
            <div className={styles.subfooter_socials}>
                <Link href="#">
                    <FaPinterest size={24} id={styles.icons} />
                </Link>
                <Link href="#">
                    <FaFacebook size={24} id={styles.icons} />
                </Link>
                <Link href="#">
                    <FaInstagram size={24} id={styles.icons} />
                </Link>
                <Link href="#">
                    <FaTwitter size={24} id={styles.icons} />
                </Link>
                <Link href="#">
                    <FaYoutube size={24} id={styles.icons} />
                </Link>
                <Link href="#">
                    <FaTiktok size={24} id={styles.icons} />
                </Link>  
            </div>
        <div className={styles.subfooter_links}>
            <ul>
                <li>
                    <Link href="#">Terms</Link>
                </li>
                <li>
                    <Link href="#">CA Supply Chain</Link>
                </li>
                <li>
                    <Link href="#">Privacy</Link>
                </li>
                <li>
                    <Link href="#">CA Privacy Rights</Link>
                </li>
                <li>
                    <Link href="#">Your Privacy Choices</Link>
                </li>
                <li>
                    <Link href="#">Interest Based Ads</Link>
                </li>
                <li>
                   TM & © 2023 Target Brands, Inc.
                </li>
            </ul>
        </div>
        </div>
      </div>
    )
  }
}