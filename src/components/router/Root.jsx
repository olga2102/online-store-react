import Header from "../header/header";
import { Outlet } from "react-router-dom";

function Root() {
  
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