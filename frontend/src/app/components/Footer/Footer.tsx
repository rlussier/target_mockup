'use client'
import React, { Component } from 'react'
import styles from '../../styles/scss/styles.module.scss';
import Link from "next/link";
import FooterImg from '../../assets/images/target_footer.png';
import Image from 'next/image'

type Props = {}

type State = {}

export default class footer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footer_block}>
            <div className={styles.footer_links} id="block-1">
            <h2 className={styles.footer_list_title}>About Us</h2>
            <ul>
                <li>
                  <Link href="#">
                    About Target
                  </Link>    
                </li>
                <li>
                  <Link href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    News & Blog
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Target Brands
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Bullseye Shop
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Target's Coronavirus Response
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Sustainability & ESG
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Press Center
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Advertise with Us
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#">
                     Affiliates & Partners
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Suppliers
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    TargetPlus
                  </Link>
                </li>
            </ul>
            </div>
            <div className={styles.footer_links} id="block-2">
            <h2 className={styles.footer_list_title}>Help</h2>
            <ul>
                <li>
                  <Link href="#">
                    Target Help
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Track Orders
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Recalls
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#">
                  Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Security & Fraud
                  </Link>
                </li>
                <li>
                  <Link href="#">
                  Team Member Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_links} id="block-3">
            <h2 className={styles.footer_list_title}>Stores</h2>
              <ul>
                <li>
                  <Link href="#">
                    Find a Store
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Clinic
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Pharmacy
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Optical
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    More in-Store Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_links} id="block-4">
            <h2 className={styles.footer_list_title}>Services</h2> 
              <ul>
              <li>
                  <Link href="#">
                    Target Circle
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    RedCard
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Target App
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Registry
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Same Day Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Order Pickup
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Drive Up
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Free 2-day Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    More Services
                  </Link>
                </li>
              </ul>
            </div>    
        </div>
        <div className={styles.footer_img}>
            <Image
                id="img"
                src={FooterImg}
                width={500}
                height={500}
                alt="Target Building Image"
              />
            </div>
      </div>
    )
  }
}