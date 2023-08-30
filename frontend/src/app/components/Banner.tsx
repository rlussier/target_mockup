'use client'
import React, { Component } from 'react'
import Link from "next/link";
import styles from '../styles/scss/styles.module.scss';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

type Props = {}

type State = {}

export default class Banner extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className={styles.banner}>
        <div className={styles.banner_block}>
          <div className={styles.banner_locationtracker}>
            <ul>
              <li>
                <Link href="#">
                  <FaMapMarkerAlt size={16}/><span>76012</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaBuilding size={16}/><span>Arlington South</span>
                </Link> 
              </li>
            </ul>       
        </div>
         <div className={styles.banner_links}>
        <ul className={styles.banner_menu}>
          <li>
            <Link href="/registry">Registry</Link>
          </li>
          <li>
            <Link href="/weeklyad">Weekly Ad</Link>
          </li>
          <li>
             <Link href="/redcard">RedCard</Link>
          </li>
          <li>
             <Link href="/targetcircle">Target Circle</Link>
          </li>
          <li>
             <Link href="/findstores">Find Stores</Link>
          </li>
        </ul>
        </div>
        </div>
      </div>
    )
  }
}