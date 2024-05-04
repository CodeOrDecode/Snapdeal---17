import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Cart.module.css";
import { RxCross2 } from "react-icons/rx";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Footer from "../Allsimilar/Footer"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Authcontext } from "../Context/Authcontextprovider";

const Cart = () => {

  const navigate = useNavigate();

  const { handleCartStorage,allpro,total,handleProductAdd,handleProductdecre,removepro} = React.useContext(Authcontext)


  function handleshop(){
    navigate("/men");
  }

  function getDataOfCart(){
    handleCartStorage();
  }


  function handleIncrement(val){
    // console.log(val);
    handleProductAdd(val)
  }

  function handleDecrement(val,val2){
    handleProductdecre(val,val2)
  }

  function handleRemove(val){
    removepro(val)
  }
  
  function handleProceed(){
    navigate("/checkout")
  }

  useEffect(() => {
 getDataOfCart()
  }, [])

  
  return (
    <>
      <Navbar />

      <div className={style.maincartdiv}>
        {allpro.length > 0 ? <div className={style.showlistpro}>


            {allpro && allpro.map((ele,index)=>{
                return  <div className={style.prois} key={index}>
                <img
                  className={style.proisimg}
                  src={ele.img}
                  alt=""
                />
    
                <div className={style.details}>
                  <p>{ele.title}</p>
                  <p className={style.typesinpro}>Color: Multicolor | Size: {ele.size}</p>
    
                  <div className={style.remove}>
                    <RxCross2 />
                    <span className={style.removep} onClick={()=>{handleRemove(ele.title)}}>Remove</span>
                  </div>
                </div>
    
                <div className={style.price}>
                  <p>Rs. {ele.price}</p>
                </div>
    
                <div className={style.price2}>
                  <p  className={style.qty}>Quantity : {ele.qty}</p>
    
                  <div className={style.both}>
                    <div>
                      <CiCirclePlus className={style.icon} onClick={()=>{handleIncrement(ele.title)}}/>
                    </div>
    
                    <div>
                      <CiCircleMinus className={style.icon}  onClick={()=>{handleDecrement(ele.title,ele.qty)}}/>
                    </div>
                  </div>
                </div>
    
    
                <div className={style.price4}>
                  <p>Subtotal : Rs. {ele.price*ele.qty}</p>
                </div>
    
              </div>
            })}



          <div className={style.paybutton}>
            <button onClick={handleProceed}>PROCEED TO PAY RS. {total}</button>
        </div>

        </div>:<div className={style.emptycart}><p>Shopping Cart is empty!</p>
        <button className={style.shopbutton} onClick={handleshop}>START SHOPPING NOW</button>
        </div>}

        
      </div>


      <Footer/>
    </>
  );
};

export default Cart;
