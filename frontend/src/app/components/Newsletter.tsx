'use client'
import React, { Component } from 'react'
import styles from '../styles/scss/styles.module.scss';
import Link from 'next/link';

type Props = {}

type State = {}

export default class Newsletter extends Component<Props, State> {
//   state = {email}

  render() {
    return (
        <div className={styles.container}>
      <div className={styles.newsletter}>
        <div className={styles.newsletter_block}>
            <span>Get top deals, latest trends, and more.</span> 
            <input 
            type="email"
            placeholder="Email Address"
            // value={this.state.email}
            // onChange={}
            />
            <button>Sign Up</button>
            <Link href="#">Privacy Policy</Link>
        </div>
        <div className={styles.newsletter_offerDetails}>
            <Link href="#">
            <span><b>*See offer details.</b> Restrictions apply. Pricing, promotions and availability may vary by location and at Target.com</span>
            </Link>
        </div>
      </div>
      </div>
    )
  }
}
