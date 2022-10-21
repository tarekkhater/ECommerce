import styles from '../../styles/Dashboard/Sidebar.module.css'
import styless from '../../styles/Dashboard/Widget.module.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Widget from './Widget'
import Revenue from './Revenue'
import Graph from './Graph'
import Header from './Header'
import Link from 'next/link'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../../redux/slice";
import Nav from './Nav';
import Products from './Products';
import AddClient from './AddClient';
import Orders from './Orders';
import Clients from './Clients';
import Users from './Users';
import { useAuth } from '../../Hooks/auth';
export default function Sidebar({products , orders , clients , users ,totalSalesMonths ,totalClientsMonths ,totalUsersMonths ,totalOrdersMonths}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
      const {logout} = useAuth({middleware:""})
  return (
    <div className="container" id={styles.container}>
        <div className="row">
            <div className="col col-lg-3 col-md-4 col-sm-6" id={styles.sidebar}>
                <nav  id={styles.nav} className="navbar-nav" >  
                    <h2 >Amazon</h2>
                    <ul className="list-group" id="list-tab" role="tablist">
                        <p>MAIN</p>
                       
                        <a href="#list-home" className="list-group-item list-group-item-action active"id="home" data-bs-toggle="list" role="tab" aria-controls="list-home"  >
                        <DashboardIcon className={styles.icon} /> dashboard
                        </a>
                       
                        <p>LISTS</p>
                        <a href="#list-users" className="list-group-item list-group-item-action" id="users" data-bs-toggle="list" role="tab" aria-controls="list-users"> <PersonOutlineIcon className={styles.icon}  />  Users</a>
                        <a href="#list-clients" className="list-group-item list-group-item-action"id="clients" data-bs-toggle="list" role="tab" aria-controls="list-clients"> <PersonOutlineIcon className={styles.icon}  /> Clients</a>
                        <a href="#list-products" className="list-group-item list-group-item-action" id="products" data-bs-toggle="list" role="tab" aria-controls="list-products"><StoreIcon className={styles.icon}  />  Products</a>
                        <a href="#list-orders" className="list-group-item list-group-item-action" id="orders" data-bs-toggle="list" role="tab" aria-controls="list-orders"> <CreditCardIcon className={styles.icon}  />  Orders</a>
                        <a className="list-group-item list-group-item-action" id="delivery" data-bs-toggle="list" role="tab" aria-controls="list-delivery"><LocalShippingIcon className={styles.icon}  />  Delievry</a>
                        <p>USEFUL</p>
                        <a href="#list-stats" className="list-group-item list-group-item-action" id="stats" data-bs-toggle="list" role="tab" aria-controls="list-stats"><InsertChartIcon className={styles.icon}  /> Stats</a>
                        <a className="list-group-item list-group-item-action" id="notifications" data-bs-toggle="list" role="tab" aria-controls="list-notifications"><NotificationsNoneIcon className={styles.icon}  />Notifications</a>
                        <p>SERVICE</p>
                        <a href="#list-addClient" className="list-group-item list-group-item-action" id="addClient" data-bs-toggle="list" role="tab" aria-controls="list-addClient"> <SettingsSystemDaydreamOutlinedIcon className={styles.icon}  />  Add client</a>
                        <p>USER</p>
                        <a className="list-group-item list-group-item-action" id="delivery" data-bs-toggle="list" role="tab" aria-controls="list-delivery"><AccountCircleOutlinedIcon className={styles.icon}  /> Profile</a>
                        <a className="list-group-item list-group-item-action" id="logout" ><button onClick={logout}><ExitToAppIcon  className={styles.icon}/> Logout</button></a>
                    </ul>
                </nav>
            </div>
            <div className="col col-lg-9 col-md-8 col-sm-6">
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="home">
                    <Nav />
                    <Widget users={users} orders={orders} clients={clients} totalSalesMonths={totalSalesMonths} 
                      totalClientsMonths={totalClientsMonths} totalUsersMonths={totalUsersMonths} totalOrdersMonths={totalOrdersMonths}/>
                    <div className="row" id={styles.row} >
                      <div className="col col-lg-4 col-md-6 col-sm-12">
                        <Revenue orders={orders} totalSalesMonths={totalSalesMonths} />
                      </div>
                      <div className="col col-lg-8 col-md-6 col-sm-12" >
                        <Graph totalSalesMonths={totalSalesMonths}/>
                      </div>
                      </div>
                </div>
                <div className="tab-pane fade" id="list-users" role="tabpanel" aria-labelledby="users">
                    <Users users={users} />
                </div>
                <div className="tab-pane fade" id="list-clients" role="tabpanel" aria-labelledby="clients">
                    <Clients clients={clients} />
                </div>
                <div className="tab-pane fade" id="list-products" role="tabpanel" aria-labelledby="products">
                    <Products products={products} />
                </div>
                <div className="tab-pane fade" id="list-orders" role="tabpanel" aria-labelledby="orders">
                    <Orders orders={orders} />
                </div>
                <div className="tab-pane fade" id="list-clients" role="tabpanel" aria-labelledby="clients">hi</div>
                <div className="tab-pane fade" id="list-stats" role="tabpanel" aria-labelledby="status">
                   <div id={styless.container}>
                   <div className="row" >
                      <div className="col col-lg-4 col-md-6 col-sm-12">
                        <Revenue orders={orders} totalSalesMonths={totalSalesMonths}/>
                      </div>
                      <div className="col col-lg-8 col-md-6 col-sm-12" >
                        <Graph totalSalesMonths={totalSalesMonths}/>
                      </div>
                      </div>
                   </div>
                </div>
                <div className="tab-pane fade" id="list-orders" role="tabpanel" aria-labelledby="orders">...</div>
                <div className="tab-pane fade" id="list-addClient" role="tabpanel" aria-labelledby="addClient">
                    <AddClient />
                </div>
                <div className="tab-pane fade" id="list-products" role="tabpanel" aria-labelledby="products">hello</div>
            </div>
            </div>
        </div>
    </div>
  )
}
