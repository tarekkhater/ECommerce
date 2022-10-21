import React from 'react'
import Head from 'next/head'
import AppLayout from '../../Components/Layouts/AppLayout';
import { useAuthAdmin } from '../../Hooks/authAdmin';
import Home from "../../components/dashboard/Home";
import { useSelector } from 'react-redux';
import styles from '../../styles/Dashboard/Dashboard.module.css'

export default function Dashboard({products , orders , clients , users}) {
    const { admin } = useAuthAdmin({ middleware: 'auth:admin' })
    const show  = useSelector(state=> state.items.users)
    if(admin){
        return (
            
            <AppLayout >
        
                    <Head>
                        <title>Admin - Dashboard</title>
                    </Head>
        
                    
                    {show? (
                        <div className={styles.dark}>
                            <Home products={products?.products} orders={orders?.orders} clients={clients?.clients} users={users?.users}/>
                        </div> ) : (
                        <div className={styles.light}>
                        <Home products={products?.products} orders={orders?.orders} clients={clients?.clients} users={users?.users}/>
                        </div> 
                    )}
                    
                </AppLayout>
                
          )
                }
 
}


export async function getServerSideProps(){
    const response = await fetch("http://localhost:8000/api/products").then(res=>res.json())
    const data = await fetch("http://localhost:8000/api/orders").then(res=>res.json())
    const clients = await fetch("http://localhost:8000/api/clients").then(res=>res.json())
    const users = await fetch("http://localhost:8000/api/users").then(res=>res.json())
    return{
      props:{
          products: response,
          orders:data,
          clients,
          users,
      }
    }
  }
