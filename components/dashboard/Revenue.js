import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import styles from '../../styles/Dashboard/Revenue.module.css'
import { useSelector } from 'react-redux';
export default function Revenue({orders}) {
  const dark = useSelector(state => state.items.users)
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth()+1;
  var y = date.getFullYear();
  var today = y+"-"+m+'-'+d
  var yesterday = y+"-"+m+'-'+(d-1);
  var totalToday = [];
  var totalYesterday = [];
  var totalWeek = [];
       orders?.map(order=>{
      if(order.created_at == today){
        totalToday.push(order?.product.price * order.quantity)
      }
      if(order.created_at == yesterday){
        totalYesterday.push(order?.product.price * order.quantity)
      }
      for(var x =1; x<8 ; x++){
        if(order.created_at == (y+"-"+m+'-'+(d-x))){
          totalWeek.push(order?.product.price * order.quantity)
        }
      }
  })
  var totalSalesToday =0;
  for(var i =0 ; i< totalToday.length ;i++){
     totalSalesToday += totalToday[i];
  }
  var totalSalesYesterday =0;
  for(var i =0 ; i< totalYesterday.length ;i++){
     totalSalesYesterday += totalYesterday[i];
  }
  var totalSalesWeek =0;
  for(var i =0 ; i< totalWeek.length ;i++){
     totalSalesWeek += totalWeek[i];
  }
  return (
  <div className={styles.container}>
    <div className={dark? styles.darks:styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className={styles.title}>Total sales made today</p>
        <p className={styles.amount}>${totalSalesToday}</p>
        <p className={styles.desc}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div  id={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Day</div>
            {(totalSalesYesterday /1000) > 1?(
              <div className={styles.itemResultPositive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={styles.resultAmount}>${totalSalesYesterday /1000}k</div>
            </div>
            ):(
              <div className={styles.itemResultNegative}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={styles.resultAmount}>${totalSalesYesterday /1000}k</div>
            </div>
            )}
            
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            {(totalSalesWeek /1000) > 1?(
              <div className={styles.itemResultPositive}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={styles.resultAmount}>${totalSalesWeek /1000}k</div>
            </div>
            ):(
              <div className={styles.itemResultNegative}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={styles.resultAmount}>${totalSalesWeek /1000}k</div>
            </div>
            )}
           
          </div>
        </div>
        <h2></h2>
      </div>
    </div>
    
  </div>
  );
};

