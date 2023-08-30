'use client'
import React from 'react';
import styles from '../../styles/scss/styles.module.scss';
import Link from 'next/link';
import categoriesData from './Categories.json';

type Categories = {
    CategoryId: string;
    CategoryName: string;
    CategoryImg: string;
};

const Categories: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.categories_block}>
        <h1>Featured Categories</h1>
        <div className={styles.categories_block_list}>
          <ul>
            {categoriesData.map((category) => (
              <li key={category.CategoryId}>
                <Link href="#">
                  <img src={category.CategoryImg}/>
                  <span>{category.CategoryName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;