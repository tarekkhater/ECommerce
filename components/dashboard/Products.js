import styles from '../../styles/Dashboard/Users.module.css'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from 'react-redux';
export default function Products({products}) {
 
  const dark = useSelector(state => state.items.users)
  return (
    <div  className={ styles.container} >
        <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell id={dark? styles.darks: styles.tableCell}>Tracking ID</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Name</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Customer_Id</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Amount</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>price</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Reviews</TableCell>
              <TableCell id={dark? styles.darks:styles.tableCell}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product?.id}>
                <TableCell id={dark? styles.darks:styles.tableCell}>{product?.id}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}>
                  <div className={styles.cellWrapper}>
                    <img src={`http://localhost:8000/images/products/${product.image}`} alt={product.name} className={styles.image} />
                    {product.name}
                  </div>
                </TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{textAlign:'center'}}>{product.client_id}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}style={{paddingLeft:'30px'}}>{product.count_in_stock}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}style={{paddingLeft:'20px'}}>${product.price}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell} style={{paddingLeft:'36px'}}>{product.Reviews}</TableCell>
                <TableCell id={dark? styles.darks:styles.tableCell}>
                  {product.count_in_stock > 0? (
                    <div>
                      <span className={styles.Approved}>Available</span>
                    </div>):(
                    <div>
                      <span className={styles.Pending}>Unavailable</span>
                    </div>)}
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}


