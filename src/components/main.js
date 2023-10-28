import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Header from "./header";
import Products from "./products/products";
import { useParams } from "react-router-dom";
import Home from "./home/Home";
import Services from "./Services";
import Contact from "./Contact"

function Main() {
  const [selectedPage, setSelectedPage] = useState();
  const params = useParams();
  const { page } = params;

  useEffect(() => {
    console.log(page);
    if (page === "products") {
      setSelectedPage(<Products />);
    } else if (page === "services") {
      setSelectedPage(<Services />);
    } else if (page ==="Contact Us"){
      setSelectedPage(<Contact/>)
    }
    else {
      setSelectedPage(<Home />);
    }
  }, [page]);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      {selectedPage ? selectedPage : null}
    </div>
  );
}

export default Main;
