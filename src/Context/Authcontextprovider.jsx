import React from "react";
import { useState } from "react";

export const Authcontext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const [auth, setAuth] = useState(true);
  const [allpro, setAllpro] = useState([]);
  const [total, setTotal] = useState(0);
  const [checkall, setCheckall] = useState([]);
const [checktotal, setChecktotal] = useState(0)

  function handlesignupauth() {
    setAuth(true);
  }

  function handleloginauth() {
    setAuth(true);
  }

  function handlelogoutauth() {
    setAuth(false);
  }

  function handleProductAdd(val) {
    // console.log(val);
    let alldata = JSON.parse(localStorage.getItem("cartpro"));

    let updateIn = alldata.map((ele) => {
      if (ele.title == val) {
        ele.qty = ele.qty + 1;
        return ele;
      } else {
        return ele;
      }
    });

    let allPrice = 0;

    updateIn.forEach((ele) => {
      allPrice = allPrice + ele.price * ele.qty;
    });
    setTotal(allPrice);
    setAllpro(updateIn);
    localStorage.setItem("cartpro", JSON.stringify(updateIn));
  }

  function handleProductdecre(val, val2) {
    if (val2 == 1) {
      let alldata = JSON.parse(localStorage.getItem("cartpro"));

      let upcomplex = alldata.filter((ele) => {
        if (ele.title != val) {
          return ele;
        }
      });

      let allPrice = 0;

      upcomplex.forEach((ele) => {
        allPrice = allPrice + ele.price * ele.qty;
      });
      setTotal(allPrice);
      setAllpro(upcomplex);
      localStorage.setItem("cartpro", JSON.stringify(upcomplex));
    } else {
      let alldata = JSON.parse(localStorage.getItem("cartpro"));

      let updateIn = alldata.map((ele) => {
        if (ele.title == val) {
          ele.qty = ele.qty - 1;
          return ele;
        } else {
          return ele;
        }
      });

      let allPrice = 0;

      updateIn.forEach((ele) => {
        allPrice = allPrice + ele.price * ele.qty;
      });
      setTotal(allPrice);
      setAllpro(updateIn);
      localStorage.setItem("cartpro", JSON.stringify(updateIn));
    }
  }

  function removepro(val) {
    let alldata = JSON.parse(localStorage.getItem("cartpro"));

    let upcomplex2 = alldata.filter((ele) => {
      if (ele.title != val) {
        return ele;
      }
    });

    let allPrice = 0;

    upcomplex2.forEach((ele) => {
      allPrice = allPrice + ele.price * ele.qty;
    });
    setTotal(allPrice);
    setAllpro(upcomplex2);
    localStorage.setItem("cartpro", JSON.stringify(upcomplex2));
  }

  function handleCartStorage() {
    let alldata = JSON.parse(localStorage.getItem("cartpro"));
    if(alldata == null || alldata == []){
      setAllpro([]);
    }
    else{
      setAllpro(alldata);

      let allPrice = 0;
  
      alldata.forEach((ele) => {
        allPrice = allPrice + ele.price * ele.qty;
      });
      // console.log(allPrice);
      setTotal(allPrice);
    }

  }

  function purchaseIt(val1, val2) {
    let obj = {
      title: val1.title,
      img: val1.bigimg,
      price: val1.price,
      size: val2,
      qty: 1,
    };
    if (
      JSON.parse(localStorage.getItem("cartpro")) == null ||
      JSON.parse(localStorage.getItem("cartpro")) == []
    ) {
      localStorage.setItem("cartpro", JSON.stringify([obj]));
    } else {
      let datapro = JSON.parse(localStorage.getItem("cartpro"));
      localStorage.setItem("cartpro", JSON.stringify([...datapro, obj]));
    }
  }

  function handleCheckout(){
    let alldata = JSON.parse(localStorage.getItem("cartpro"));
    setCheckall(alldata);
    let allPrice = 0;

    alldata.forEach((ele) => {
      allPrice = allPrice + (ele.price * ele.qty);
    });
    // console.log(allPrice);
    setChecktotal(allPrice);
  }

  return (
    <Authcontext.Provider
      value={{
        auth,
        handlesignupauth,
        handleloginauth,
        handlelogoutauth,
        purchaseIt,
        handleCartStorage,
        allpro,
        total,
        handleProductAdd,
        handleProductdecre,
        removepro,
        handleCheckout,
        checkall,
        checktotal
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontextprovider;
