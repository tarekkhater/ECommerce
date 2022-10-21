/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/ProductSelect.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../redux/slice';
import { useAuthProduct } from '../Hooks/productCreate';
import { useAuth } from '../Hooks/auth';
import Modal from 'react-modal';

export default function ProductSelect({product}) {
    const [quantity , setQuantity] = useState(1)
    const [error , setError] = useState([]);
    const product_id = product.id
    const name = product.name
    const { addOrder} = useAuthProduct({middleware:""})
    const {user} = useAuth({middleware:"auth"})
    const user_id = user.id 
    const [show , setShow] = useState(false)
    const handleClick = async () => {
      addOrder({user_id,product_id , quantity })
      
      
  }

  return (
    <div className="container" id={styles.container}>
        <Link href="/"><a><h5>Back to products</h5></a></Link>
        <div className="row" id={styles.row}>
            <div className="col col-sm-12 col-md-7 col-lg-8">
                <img src={`http://localhost:8000/images/products/${product.image}`} alt={product.name} layout='responsive' />
            </div>
            <div className="col col-xm-12 col-sm-12 col-md-5 col-lg-4" >
                <div className="col" id={styles.cardInfo}>
                    <ul>
                        <li>
                            <h2>{product.name}</h2>
                        </li>
                        <li>{product.description}</li>
                        <li> {product.brand}</li>
                        <li> {product.Reviews} views</li>
                        
                    </ul>
                </div>
                <div className="card " id={styles.card}>
                    <div className={styles.cardInfo}>
                        <h5>Price</h5>
                        <h5>${product.price}</h5>
                    </div>
                    <div className={styles.cardInfo}>
                        <h5>Status</h5>
                        <h5 className={product.count_in_stock > 0 ? styles.available : styles.unavailable}>{product.count_in_stock > 0 ?"Available" : "Unavailable"}</h5>
                    </div>
                    <div className={styles.cardInfo} style={{marginBottom:"2px"}}>
                        <h5>Quantity</h5>
                        <select onChange={(e)=>setQuantity(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <button className="btn btn-warning" onClick={()=>setShow(!show)}>Add to cart <AddShoppingCartIcon style={{width:"16px", height:"16px"}} /></button>
                </div>
                
            </div>
        </div>
        {show &&(
       <div> <Modal isOpen={show} className={styles.model}>
       <div style={{paddingTop:"5px"}}>
       <div className={styles.profile}>
       <div className="card " id={styles.card}>
         <h3>Do you want to buy this item?</h3>
                <div className={styles.cardInfo}>
                    
                    <div><img src={`http://localhost:8000/images/products/${product.image}`} alt={product.name} layout='responsive' /><span>{product.name}</span></div>
                </div>
                    <div className={styles.cardInfo}>
                        <h5>Quantity</h5>
                        <h5>{quantity}</h5>
                    </div>
                    <div className={styles.cardInfo}>
                        <h5>Price</h5>
                        <h5>${product.price * quantity}</h5>
                    </div>
                    <div className={styles.cardInfo}>
                    <button type="button"id={styles.btn1} className="btn btn-danger"  onClick={()=>{setShow(false)}}>Cancel</button>   
                    <button type="button"id={styles.btn} className="btn btn-primary" onClick={handleClick} ><Link href="/cart">Confirm</Link></button>
                 </div>
                 </div>
        </div > 
         </div>
         
               </Modal>
    </div>
      )}
    </div>
  )
}
