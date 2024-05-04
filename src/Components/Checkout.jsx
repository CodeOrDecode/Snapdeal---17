import React from "react";
import style from "../Css/Checkout.module.css";
import Navbar from "../Allsimilar/Navbar";
import { useEffect } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const { handleCheckout, checkall, checktotal } =
    React.useContext(Authcontext);

  function handleloding() {
    navigate("/loading");
  }

  useEffect(() => {
    handleCheckout();
  }, []);

  return (
    <>
      <Navbar />

      <div className={style.checkoutmain}>
        <div className={style.indiv2}>
          <div>
            <p className={style.chep1}>Review Order</p>

            {checkall &&
              checkall.map((ele, index) => {
                return (
                  <div className={style.checpro1} key={index}>
                    <img src={ele.img} alt="" />

                    <div>
                      <p className={style.chedes}>{ele.title}</p>
                      <p className={style.chedes2}>
                        Color: Multicolor Size: {ele.size}
                      </p>
                    </div>

                    <p className={style.chedes3}>Qty : {ele.qty}</p>
                    <p className={style.chedes4}>
                      Total: Rs. {ele.price * ele.qty}
                    </p>
                  </div>
                );
              })}
            <button className={style.checpay} onClick={handleloding}>
              PAY RS. {checktotal}
            </button>
          </div>

          <div>
            <p className={style.chep2}>Customer Details</p>

            <div className={style.detailpay}>
              <label>Name : </label>
              <input
                className={style.payin1}
                type="text"
                placeholder="enter name"
              />
            </div>

            <div className={style.detailpay}>
              <label>Email : </label>
              <input
                className={style.payin2}
                type="email"
                placeholder="enter email"
              />
            </div>

            <div className={style.detailpay}>
              <label>Address : </label>
              <input
                className={style.payin3}
                type="text"
                placeholder="enter address"
              />
            </div>

            <div className={style.detailpay}>
              <label>Phone : </label>
              <input
                className={style.payin4}
                type="number"
                placeholder="enter phone"
              />
            </div>

            <div className={style.detailpay}>
              <label>Pincode : </label>
              <input
                className={style.payin5}
                type="number"
                placeholder="enter pincode"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
