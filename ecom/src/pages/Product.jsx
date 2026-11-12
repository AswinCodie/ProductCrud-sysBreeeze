import React, { useEffect, useState } from 'react'
import api from '../api'
import { useNavigate } from 'react-router'

function Product() {

  const [newProductName, setNewProductName]=useState("")
  const [newProductPrice, setNewProductPrice]=useState("")

  const [products,setProducts] =useState([])
  const fetchProducts= async ()=>{
          const result = await api.get("/products")
          setProducts(result.data)
        }
  useEffect(()=>{
     fetchProducts()
  },[products])

  const navigate =useNavigate()
  const handleLogout= ()=>{
    navigate("/login")
  }

  const editProduct= async ()=>{

  }
  const deleteProduct =async (id) =>{
    try {
         const res= await api.delete("/products/${id}")

    } catch (error) {
      console.log(error)
    }
  }

  const addProduct= async()=>{
    const newProduct ={
      name:newProductName,
      price:newProductPrice
    }
    const res = api.post("/products",newProduct )
    setProducts([...products,newProduct])
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <div style={{border:"2px solid"}}>
      <h2>Product Add</h2>
      <input type='text' placeholder={"Product Name"} value={newProductName} onChange={(e)=>setNewProductName(e.target.value)}/>
      <input type='text'  placeholder={"Product Price $$"}  value={newProductPrice} onChange={(e)=>setNewProductPrice(e.target.value)}/>
      <button onClick={addProduct}>+</button>
      <br/> 
      <h1></h1>
      </div>
      <br/>
      <br/>

      <br/>
      {products.map((product)=>(

        <div key={product.id} style={{border:"2px solid"}}>
          <h1>{product.name}</h1>
          <h1>{product.price}$</h1>
          <div style={{display:"flex"}}>
            <button onClick={()=>deleteProduct(product.id)}>Delete</button>
            <button >Edit</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
