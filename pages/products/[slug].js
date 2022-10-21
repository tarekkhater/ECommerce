import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Layout from '../../components/Layouts/Layout';
import ProductSelect from '../../components/ProductSelect';
import { useAuth } from '../../Hooks/auth';
import { useAuthProduct } from '../../Hooks/productCreate';



export default function Product({data , orders}) {
  const {user} = useAuth({middleware: "auth"})
  const user_id = user?.id;
  const order = orders?.orders.filter(q=> q.user_id == user_id);
    const {query} = useRouter();
    const products = data?.products;
    const {slug }= query;
    const product = products.find(q => q.slug == slug)
    const {updateViews } = useAuthProduct({middleware:""})
    const product_id = product.id


    useEffect(() => {
      updateViews(product_id)
  },[])
    if(user ){
    if(!product)
       { return "No product found (404)"}
      else{
  return (
    <Layout title={product.name}contain={<ProductSelect product ={product}/>} orders={order}/>
  )}
}
}

export async function getServerSideProps(){
  const response = await fetch("http://localhost:8000/api/products").then(res=>res.json())
  const orders = await fetch("http://localhost:8000/api/orders").then(res=>res.json())
  return{
    props:{
        data: response,
        orders,
    }
  }
}
