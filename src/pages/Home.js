import React from "react";
import "./Home.css";
import Product from "../components/home/Products";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="row">
        <Product
          title="Sony A8H 65-inch TV: BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility - 2020 Model"
          price={240}
          ratings={5}
          image="https://m.media-amazon.com/images/I/61F0MXKMLwL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Product
          title="SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model)"
          price={260}
          ratings={5}
          image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="row">
        <Product
          title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV (2019 model)"
          price={340}
          ratings={5}
          image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)"
          price={130}
          ratings={4}
          image="https://m.media-amazon.com/images/I/71Ao8Im97TL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          title="Skyworth E20300 40-Inch 1080P Full HD Smart TV, LED Android TV with Voice Remote"
          price={410}
          ratings={5}
          image="https://m.media-amazon.com/images/I/71gzlKauNQL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="row">
        <Product
          title="SAMSUNG 86-Inch Class Crystal UHD TU9000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN86TU9000FXZA)"
          price={510}
          ratings={5}
          image="https://m.media-amazon.com/images/I/91CePgmlPPL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
