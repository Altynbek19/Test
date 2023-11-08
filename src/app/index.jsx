import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import Computer from "../components/Computer.jsx"
import Povtas from "../components/Povtas"
import Welcome from "../components/Welcome.jsx"
import Carousel from "../components/carousel.jsx"
const path = (import.meta.env.PROD)? '/project' : ''
  
const router = createBrowserRouter([
  {
    path: `/`,
    element: (
      <div>
        <Header />
        <Welcome />
      </div>
    )
  },
  {
    path: `/computer`,
    element: (
      <div>
        <Header/>
        <Computer />
        <Footer/>
      </div>
    )
  },
  {
    path: `/carousel`,
    element: (
      <div>
        <Carousel />
      </div>
    )
  },
  {
    path: `/povtas`,
    element: (
      <div>
        <Header />
        <Povtas />
        <Footer/>
      </div>
    )
  }
]);

export default router;