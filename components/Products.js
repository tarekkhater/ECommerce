/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from '../styles/Products.module.css'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Products({products}) {
    
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <div className="container" id={styles.container}>
        <div className="row" id={styles.row}>
                {products?.map((product)=>(
                    <div key={product.id} className="card col-sm-12 col-md-6 col-lg-4" id={styles.product}>
                        <div className={styles.card}>
                        <Link href={`/products/${product.slug}`}>
                            <a>
                                <img src={`http://localhost:8000/images/products/${product.image}`} alt={product.name}/>
                            </a>
                        </Link>
                        
                        <div className={styles.productInfo}>
                            <Link href={`/products/${product.slug}`}>
                                <a>
                                    <h2>{product.name}</h2>
                                </a>
                            </Link>
                            <p>{product.category}</p>
                            <p>${product.price}</p>
                            <a href={`/products/${product.slug}`}><button className="btn btn-warning">Add to cart <AddShoppingCartIcon style={{width:"16px", height:"16px"}} /></button></a>
                        </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

