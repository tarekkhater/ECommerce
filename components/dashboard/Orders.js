import React from 'react'
import styles from '../../styles/Dashboard/Users.module.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from 'react-redux';
export default function Orders({orders}) {
    const dark = useSelector(state => state.items.users)
  return (
    <div  className={ styles.container} >
        <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell id={dark? styles.darks: styles.tableCell}>Tracking ID</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Product</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Product_id</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Quantity</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Price</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>User_id</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Subtotal</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}style={{paddingLeft:'50px'}}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'41px'}}>{order.id}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}>
                  <div className={styles.cellWrapper}>
                    <img src={`http://localhost:8000/images/products/${order.product?.image}`} alt={order.product?.name} className={styles.image} />
                    {order.product?.name}
                  </div>
                </TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{textAlign:'center'}}>{order.product_id}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}style={{paddingLeft:'36px'}}>{order?.quantity}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}style={{paddingLeft:'20px'}}>${order.product?.price}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'36px'}}>{order.user_id}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'30px'}}>${order.product?.price * order?.quantity}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'36px'}}>{order.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
