import React, { useEffect } from 'react'
import style from "../Css/Conformation.module.css"
import Navbar from "../Allsimilar/Navbar"
import { useNavigate } from 'react-router-dom'

const Conformation = () => {
  const navigate = useNavigate();

  function handleGo(){
    navigate("/")
  }

  function handleClear(){
    localStorage.clear();
  }

  
  useEffect(() => {
   handleClear()
  }, [])
  

  return (
    <>
    <Navbar/>

  <div className={style.maincon}>
    <p className={style.conp1}>Your order has been received</p>
    <img src="https://clipart-library.com/images_k/red-check-mark-transparent/red-check-mark-transparent-17.png" alt="" />
    <p className={style.conp2}>Thank you for your purchase !</p>
    <p className={style.conp3}>Your order ID is : 7288765432</p>
    <p className={style.conp4}>You will receive an order conformation email with details of your order.</p>
    <button className={style.conbutt} onClick={handleGo}>CONTINUE SHOPPING</button>
  </div>
    </>
  )
}

export default Conformation