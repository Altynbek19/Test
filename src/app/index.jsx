import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header.jsx"
import Welcome from "../components/Welcome.jsx";
import Carousel from "../components/carousel.jsx";
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
    path: `/carousel`,
    element: (
      <div>
        <Carousel />
      </div>
    )
  }
]);

export default router;