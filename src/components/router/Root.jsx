import Header from "../header/header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Root() {

  const productsInBasket = useSelector(state=>state.productsInBasket.productsInBasket);

  useEffect(()=>{

    localStorage.setItem("products", JSON.stringify(productsInBasket));
  }, [productsInBasket])
  
    return (
      <>
            <Header />
            <main>
              <div className="container">
                  <Outlet />
              </div>
            </main>
      </>
    );
  }

  export default Root;