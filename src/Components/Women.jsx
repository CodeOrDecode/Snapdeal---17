import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Women.module.css";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../Allsimilar/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Women = () => {

  const navigate = useNavigate();
  const [womendata, setWomendata] = useState(null);

  // const proData = [
  //   {
  //     img: "https://n1.sdlcdn.com/imgs/k/o/o/230X258_sharpened/Rigo-Women-Light-Purple-Waffle-SDL843498020-1-5d858.webp",
  //     title: "Rigo Women Light Purple Waffle Knit Co-ord",
  //     price: "581",
  //   },
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/o/v/230X258_sharpened/JASH-CREATION-Wine-Georgette-Women-SDL500628315-1-bf38d.jpeg",
  //     title: "JASH CREATION - Wine Georgette Women's Fit",
  //     price: "393",
  //   },

  //   {
  //     img: "https://n3.sdlcdn.com/imgs/k/n/g/230X258_sharpened/Smien-Black-Rayon-Regular-Fit-SDL193494870-1-ef462.webp",
  //     title: "Smien - Black Rayon Regular Fit Women's Jumpsuit",
  //     price: "369",
  //   },
  //   {
  //     img: "https://n1.sdlcdn.com/imgs/k/t/n/230X258_sharpened/MOJILAA-Georgette-Printed-Midi-Women-SDL548169441-1-91d04.webp",
  //     title: "MOJILAA Georgette Printed Midi Women's Empire Dress",
  //     price: "555",
  //   },

  //   // 5
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/t/j/230X258_sharpened/Femvy-Polyester-Solid-Midi-Women-SDL267827329-1-2a89a.webp",
  //     title: "Femvy Polyester Solid Midi Women's Fit",
  //     price: "329",
  //   },
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/m/z/230X258_sharpened/Juniper-Coral-Rayon-Regular-Fit-SDL051955311-1-05229.webp",
  //     title: "Juniper - Coral Rayon Regular Fit Women's Jumpsuit",
  //     price: "749",
  //   },
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/n/g/230X258_sharpened/Frionkandy-Maroon-Cotton-Women-s-SDL267570118-1-69d00.jpeg",
  //     title: "Frionkandy - Maroon Cotton Women's Fit",
  //     price: "382",
  //   },
  //   {
  //     img: "https://n1.sdlcdn.com/imgs/k/q/2/230X258_sharpened/Frionkandy-Rayon-Solid-Ankle-Length-SDL787875275-1-e6284.webp",
  //     title: "Frionkandy Rayon Solid Ankle Length Women's Gown",
  //     price: "628",
  //   },

  //   // 9
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/m/f/230X258_sharpened/ALL-WAYS-YOU-Purple-Polyester-SDL102116571-1-6cc10.webp",
  //     title: "Purple Polyester Regular Fit Women's Jumpsuit",
  //     price: "529",
  //   },
  //   {
  //     img: "https://n4.sdlcdn.com/imgs/k/s/4/230X258_sharpened/gufrina-Rayon-Dyed-Midi-Women-SDL908748220-1-cc7a0.webp",
  //     title: "Rayon Dyed Midi Women's Fit",
  //     price: "504",
  //   },
  //   {
  //     img: "https://n4.sdlcdn.com/imgs/k/s/4/230X258_sharpened/gufrina-Rayon-Solid-Midi-Women-SDL685017057-1-25245.webp",
  //     title: "Rayon Solid Midi Women's Shirt Dres",
  //     price: "412",
  //   },
  //   {
  //     img: "https://n4.sdlcdn.com/imgs/k/l/f/230X258_sharpened/AMIRAS-INDIAN-ETHNIC-WEAR-White-SDL708441414-1-f538a.webp",
  //     title: "AMIRA'S INDIAN ETHNICWEAR  Women's Fit",
  //     price: "1207",
  //   },

  //   // 12

  //   {
  //     img: "https://n4.sdlcdn.com/imgs/k/p/s/230X258_sharpened/JC4U-Maroon-Rayon-Women-s-SDL461640104-1-49ab6.webp",
  //     title: "JC4U  Women's A-line Dres",
  //     price: "616",
  //   },
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/s/4/230X258_sharpened/gufrina-Rayon-Dyed-Full-Length-SDL114871109-1-b343b.webp",
  //     title: "Rayon Dyed Full Length Women's Gown",
  //     price: "504",
  //   },
  //   {
  //     img: "https://n1.sdlcdn.com/imgs/k/m/d/230X258_sharpened/Femvy-Black-Georgette-Women-s-SDL464252743-1-3675d.webp",
  //     title: "Femvy - Black Georgette Women's Gown",
  //     price: "406",
  //   },
  //   {
  //     img: "https://n2.sdlcdn.com/imgs/k/f/r/230X258_sharpened/JC4U-Viscose-Navy-Women-s-SDL276635411-1-74de3.webp",
  //     title: "Viscose Navy Women's A- line Dress",
  //     price: "669",
  //   },
  // ];

  async function womenProductData() {
    try {
      let res = await fetch(
        "https://snapdeal-backend-1.onrender.com/women/getwomen"
      );
      let res2 = await res.json();
      // console.log(res2.products);
      setWomendata(res2.products);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSingleproduct(pro) {
    localStorage.setItem("product", JSON.stringify(pro));
    navigate("/product");
  }

  useEffect(() => {
    womenProductData();
  }, []);

  return (
    <>
      <Navbar />

      <div className={style.mendivmain}>
        <div className={style.insidemen}>
          <div className={style.inside1}>
            <div className={style.prsidepa1}>
              <p className={style.sideclo}>Women's Clothing</p>
              <p className={style.sideclo2}>Dresses, Gowns &amp; Jumpsuits</p>
              <p className={style.sideclo2}>Western Dresses For Women</p>
              <p className={style.sideclo2}>Jumpsuit For Women</p>
              <p className={style.sideclo2}>Co-Ords</p>
            </div>

            <div className={style.ruller}></div>

            <div className={style.brand}>
              <p className={style.sideclo}>Pattern</p>
              <p className={style.sideclo2}>Applique</p>
              <p className={style.sideclo2}>Checks</p>
              <p className={style.sideclo2}>Colorblock</p>
              <p className={style.sideclo2}>Cut Outs</p>
              <p className={style.sideclo2}>Dyed</p>
            </div>

            <div className={style.ruller}></div>

            <div className={style.color}>
              <p className={style.sideclo}>Color</p>

              <div className={style.colordiv}>
                <div className={style.colorfill1}></div>
                <p>Beige</p>
              </div>
              <div className={style.colordiv}>
                <div className={style.colorfill2}></div>
                <p>Black</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill3}></div>
                <p>Blue</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill4}></div>
                <p>Bronze</p>
              </div>

              <div className={style.colordiv}>
                <div className={style.colorfill5}></div>
                <p>Brown</p>
              </div>
            </div>
            <div className={style.ruller}></div>

            <div className={style.fit}></div>

            <div className={style.fit}>
              <p className={style.sideclo}>Neck Shape</p>
              <p className={style.sideclo2}>Asymmetric Neck</p>
              <p className={style.sideclo2}>Boat Neck</p>
              <p className={style.sideclo2}>Choker Neck</p>
              <p className={style.sideclo2}>Halter Neck</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Type</p>
              <p className={style.sideclo2}>A- line Dress</p>
              <p className={style.sideclo2}>Asymmetric Dress</p>
              <p className={style.sideclo2}>Basic Jumpsuit</p>
              <p className={style.sideclo2}>Blouson Dress</p>
              <p className={style.sideclo2}>A-line Dress</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Sleeves Length</p>
              <p className={style.sideclo2}>3/4th Sleeves</p>
              <p className={style.sideclo2}>Cap Sleeves</p>
              <p className={style.sideclo2}>Full Sleeves</p>
              <p className={style.sideclo2}>Half Sleeves</p>
              <p className={style.sideclo2}>Rollup Sleeves</p>
            </div>
            <div className={style.ruller}></div>

            <div className={style.fit}>
              <p className={style.sideclo}>Brand</p>
              <p className={style.sideclo2}>9 Impression</p>
              <p className={style.sideclo2}>Aarika</p>
              <p className={style.sideclo2}>AARSHYA</p>
              <p className={style.sideclo2}>Aask</p>
              <p className={style.sideclo2}>Aatmik</p>
              <p className={style.sideclo2}>Addyvero</p>
              <p className={style.sideclo2}>ANNEIV</p>
              <p className={style.sideclo2}>AUSTIVO</p>
            </div>

            <div className={style.ruller}></div>
            <div className={style.fit}>
              <p className={style.sideclo}>Discount %</p>
              <p className={style.sideclo2}>0 - 10</p>
              <p className={style.sideclo2}>10 - 20</p>
              <p className={style.sideclo2}>20 - 30</p>
              <p className={style.sideclo2}>30 - 40</p>
              <p className={style.sideclo2}>40 - 50</p>
            </div>
          </div>

          <div className={style.inside2}>
            <div className={style.inpart1}>
              <p className={style.inp1}>Dresses, Gowns & Jumpsuits</p>
              <div className={style.inp2}>
                Sort by : Popularity <FaAngleDown className={style.indown} />
              </div>
            </div>

            <div className={style.parti}></div>

            <div className={style.prolist}>
              {womendata &&
                womendata.map((ele) => {
                  return (
                    <div key={ele._id} onClick={()=>{handleSingleproduct(ele)}}>
                      <img src={ele.bigimg} alt="" />
                      <p className={style.protit}>{ele.title}</p>
                      <span className={style.proprice2}>Rs. {ele.price}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Women;
