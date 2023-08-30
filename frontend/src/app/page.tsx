// import Image from 'next/image'
import styles from './styles/scss/styles.module.scss';
import Categories from './components/Categories/Categories';

export default function Home() {
  return (
    <main className="main_container">
      <div className="main_contianer-block">
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
          <div className={styles.container}>
            <div className={styles.container_block}>
              <div className={styles.container_block_1}>
              <h1>Summer Sales</h1>
              <span>This is a paragraph.</span>
            
            <div className={styles.container_block_img} id="img-block">
              <img src="https://www.kathykuohome.com/Content/images_cust/summerClassics_brand_page/SC_Mobile_Hero.jpg"/>
            </div>
            </div>
            </div>
            <div className={styles.container_block}>
            <div className={styles.container_block_2}>
              <h1>Autumn Sales</h1>
              <span>This is a paragraph.</span>

            <div className={styles.container_block_img} id="img-block">
              <img src="https://www.kathykuohome.com/Content/images_cust/summerClassics_brand_page/SC_Mobile_Hero.jpg"/>
            </div>
          </div>
          </div>
          </div>

      </div>
      <Categories />
    </main>
  )
}
