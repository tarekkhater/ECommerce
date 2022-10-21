/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect } from 'react'
import styles from '../styles/Cart.module.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAuthProduct } from '../Hooks/productCreate';
import { useRouter } from 'next/router';
export default function ShoppingCart({orders}) {
    const cart = orders
    const {deleteOrder} =useAuthProduct({middleware:""})
    
    const route = useRouter()

   
  return (
    <div  className={ styles.container} >
      <h4>Shopping Cart</h4>

      {cart?.length == 0? (<div style={{textAlign:"center" , marginTop:"120px"}}>
        <h6>No item to view.</h6>
      </div>):
      
      (
        <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell >Product</TableCell>
              <TableCell >Quantity</TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Category</TableCell>
              <TableCell >Subtotal</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.map((order) => (
              <TableRow key={order.id}>
                <TableCell >
                  <div className={styles.cellWrapper}>
                    <img src={`http://localhost:8000/images/products/${order.product?.image}`} alt={order.product?.name} className={styles.image}/>
                    {order.product?.name}
                  </div>
                </TableCell>
                <TableCell style={{paddingLeft:"28px"}}>{order?.quantity}</TableCell>
                <TableCell style={{paddingLeft:"20px"}}>${order.product?.price}</TableCell>
                <TableCell style={{paddingLeft:"28px"}}>{order.product?.category}</TableCell>
                <TableCell style={{paddingLeft:"28px"}}>${order.product?.price * order?.quantity}</TableCell>
                <TableCell>
                  <Link href={`/products/${order.product?.slug}`}>
                    <a>
                      <button className="btn btn-warning" id={styles.btn} >Check Out</button>
                    </a>  
                  </Link>
                </TableCell>
                <TableCell><button className="btn btn-warning" id={styles.btn} onClick={()=>{deleteOrder(order?.id); route.push("/")}}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
        
    </div>
  )
}

