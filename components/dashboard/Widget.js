import styles from "../../styles/Dashboard/Widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import 'bootstrap/dist/css/bootstrap.css';
export default function Widget({users , orders, clients , totalSalesMonths , totalClientsMonths ,totalUsersMonths ,totalOrdersMonths}) {
    var date = new Date()
    var m = parseInt(date.getMonth());
    var Earnings=totalSalesMonths?.[m];
    var percentEarning = ((totalSalesMonths?.[m] - (totalSalesMonths?.[(m-1)])==0?totalSalesMonths?.[m]:totalSalesMonths?.[(m-1)]) / (totalSalesMonths?.[(m-1)] == 0? 1 :totalSalesMonths?.[(m-1)]))*100;
    var percentClientsIncreasing =( totalClientsMonths?.[m] / ((clients?.length - totalClientsMonths?.[m]) ==0? 1 :(clients?.length - totalClientsMonths?.[m])) ) *100;
    var percentUsersIncreasing =( totalUsersMonths?.[m] / ((users?.length - totalUsersMonths?.[m])==0? 1 :(users?.length - totalUsersMonths?.[m]) ) ) *100;
    var percentOrdersIncreasing =( totalOrdersMonths?.[m] / ((orders?.length - totalOrdersMonths?.[m])==0? 1 :(orders?.length - totalOrdersMonths?.[m]) ) ) *100;

    return (
    <div className="container" id={styles.container}>
        <div className="row" id={styles.widgets}>
            <div className="col col-lg-3 col-md-6 col-sm-12" >
                <div id={styles.widget}>
                <div className={styles.left}>
                    <span className={styles.title}>USERS</span>
                    <span className={styles.counterNumbers}>
                     {users?.length}
                    </span>
                    <span className={styles.link}>See all users</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        {percentUsersIncreasing} %
                    </div>
                        <PersonOutlinedIcon className={styles.icon} style={{ color: "crimson",  backgroundColor: "rgba(255, 0, 0, 0.2)", }}/>
                </div>
                </div>
                </div>
            <div className="col col-lg-3 col-md-6 col-sm-12" >
            <div id={styles.widget}>
                <div className={styles.left}>
                    <span className={styles.title}>ORDERS</span>
                    <span className={styles.counterNumbers}>
                        {orders?.length}
                    </span>
                    <span className={styles.link}>View all orders</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        {percentOrdersIncreasing} %
                    </div>
                        <ShoppingCartOutlinedIcon className={styles.icon} style={{ color: "goldenrod",  backgroundColor: "rgba(218, 165, 32, 0.2)", }}/>
                </div>
                </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12" >
                <div id={styles.widget}>
                <div className={styles.left}>
                    <span className={styles.title}>CLIENTS</span>
                    <span className={styles.counterNumbers}>
                     {clients?.length}
                    </span>
                    <span className={styles.link}>See all clients</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        {percentClientsIncreasing} %
                    </div>
                        <PersonOutlinedIcon className={styles.icon} style={{ color: "crimson",  backgroundColor: "rgba(255, 0, 0, 0.2)", }}/>
                </div>
                </div>
                </div>
            <div className="col col-lg-3 col-md-6 col-sm-12"  >
            <div id={styles.widget}>
                <div className={styles.left}>
                    <span className={styles.title}>EARNINGS</span>
                    <span className={styles.counterMoney} >
                      ${Earnings/1000}k
                    </span>
                    <span className={styles.link}>View earnings</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.percentagePositive}>
                        <KeyboardArrowUpIcon />
                        {percentEarning} %
                    </div>
                        <MonetizationOnOutlinedIcon className={styles.icon} style={{ color: "green",  backgroundColor: "rgba(0, 128, 0, 0.2)", }}/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
