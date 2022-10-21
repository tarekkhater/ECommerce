/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../Hooks/auth';

export default function Navbar ({orders}) {
  const num = orders?.length;
  const {user , logout , client} = useAuth({middleware: ""});
  return (
    <>
    <nav className={styles.nav}>
        <a href="/" className={styles.brand}>Amazon</a>
        <div className={styles.cartAndLogin}>
            <Link href="/cart">
                {
                 num >=1?
                  (<a><button className="btn btn-warning">Cart <span className={styles.num}>{num}</span></button></a>):
                  (<a><button className="btn btn-warning">Cart <AddShoppingCartIcon style={{width:"14px", height:"14px"}} /></button></a>)
                  }
            </Link>
            {
              client? (
               
                <Link href="/products/create" >
                  <a style={{paddingTop:"10px"}}>addProduct</a>
                </Link>
                
              ):(
                <>
          </>
              )
            }
            {
              user? (
                <Link href=" ">
                  <a style={{paddingTop:"9px"}}><button className="bg-white" onClick={logout}>Logout</button></a>
                </Link>
          ):
           (<Link href="/login">
             <a style={{paddingTop:"9px"}}>Login</a>
            </Link>)
            }

          
        </div>
    </nav>
    </>
  )
}
