import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Products from "./products/products";
import { useParams } from "react-router-dom";
import Home from "./home/Home";
import Footer from "./Footer";
import Services from "./Services";
import ProductDetails from "./products/ProductsDetails";
import Form from "./ContactForm/ContactForm";
function Main() {
  // const selectedPage = useSelector((state) => state.page.selectedPage);
const [selectedPage,setSelectedPage]=useState()
  const params = useParams();
  const { page } = params;
const {id}=params
  useEffect(() => {
    // Scroll to the top of the page smoothly when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (page === "products") {
      setSelectedPage(<Products setSelectedPage={setSelectedPage} />);
    } else if (page === "services") {
      setSelectedPage(<Services />);
    } else if (page==="home"){
      setSelectedPage(<Home />);
    }
    else if (page==="contactform"){
      setSelectedPage(<Form></Form>);
    }
  }, [page]);

  // useEffect(() => {
  //   console.log("hamza");
  //   if (id != null) {
  //     setSelectedPage(<ProductDetails />);
  //   }
  // }, [id]);

  return (
    <div className="bg-slate-100">
      <Header></Header>
      <Navbar></Navbar>
      {selectedPage ? selectedPage : null}

      <Footer></Footer>
    </div>
  );
}

export default Main;
