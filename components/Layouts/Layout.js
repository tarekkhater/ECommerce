import React from 'react'
import Navbar from '../Navbar';
import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';
export default function Layout({title , contain , orders}) {
    
  return (
    <div>
        <Head>
            <title>{title ? title + ' - Amazon' : 'Amazon'}</title>
            <meta name="description" content="Ecommerce Website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar orders={orders}/>
        </header>
        <main className={styles.main}>
            {contain}
        </main>
        <footer className={styles.footer}>
            <p>Copyright © 2022 Amazon</p>
        </footer>
    </div>
  )
}
