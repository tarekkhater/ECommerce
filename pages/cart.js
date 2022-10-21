import React from 'react'
import ShoppingCart from '../components/ShoppingCart';
import Layout from '../components/Layouts/Layout';
import { useAuth } from '../Hooks/auth';
export default function Cart({orders}) {
    const {user} = useAuth({middleware: "auth"})
    const user_id = user?.id
    const order = orders?.orders.filter(q=> q.user_id == user_id)
    console.log(user)
    if(user){
  return (

       <Layout title="Shopping Cart" orders={order} contain={<ShoppingCart orders={order} />}/>

  )
}
}

export async function getServerSideProps(){
  const response = await fetch("http://localhost:8000/api/orders").then(res=>res.json())
  return{
    props:{
        orders: response,
    }
  }
}