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
export default function Users({users}) {
    const dark = useSelector(state => state.items.users)
  return (
    <div  className={ styles.container} >
        <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell id={dark? styles.darks: styles.tableCell}>Tracking ID</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Name</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'65px'}}>Email</TableCell> 
              <TableCell id={dark? styles.darks:styles.tableCell}>Orders</TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'41px'}}>{user.id}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}>
                  <div className={styles.cellWrapper}>
                    <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" alt="" className={styles.image} />
                    {user.name}
                  </div>
                </TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}>{user.email}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}>{user?.order?.map((order)=>
                    (<span key={order?.id}>{order?.id},</span>))}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
