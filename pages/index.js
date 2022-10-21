
import Image from 'next/image'
import Layout from '../components/Layouts/Layout'
import Products from '../components/Products'
import { useAuth } from '../Hooks/auth'
import axioss from '../lib/axios'
import styles from '../styles/Home.module.css'

export default function Index({products , orders}) {
    const {user} = useAuth({middleware: ""});
    const user_id = user?.id;
    const order = orders?.orders.filter(q=> q.user_id == user_id);
    
  return (
    <div className={styles.container}>
      <Layout title="HomePage" contain={<Products products={products?.products}/>} orders={order} />
    </div>
  )

  }
export async function getServerSideProps(){
  const response = await fetch("http://localhost:8000/api/products").then(res=>res.json())
  const orders = await fetch("http://localhost:8000/api/orders").then(res=>res.json())
  return{
    props:{
        products: response,
        orders,
    }
  }
}
