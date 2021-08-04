import "react-image-gallery/styles/css/image-gallery.css";
import "./sass/main.css";
// import Home from './Home/Home'
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./utils/auth";

// import Home from "./Home/Home";
import SearchProduct from "./SearchProduct/SearchProduct";
import DetailProduct from "./DetailProduct/DetailProduct";
import UploadProduct from "./UploadProduct/UploadProduct";
import Cart from "./Cart/Cart";
import Signin from "./Signin/Signin";
import SigninAdmin from "./SigninAdmin/SigninAdmin";

import Signup from "./Signup/Signup";
import EditProduct from "./EditProduct/EditProduct";
import ProductManager from "./ProductManager/ProductManager";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/ingresar" exact component={Auth(Signin, false)} />
          <Route
            path="/ingresar-admin"
            exact
            component={Auth(SigninAdmin, false)}
          />
          <Route path="/registrar" exact component={Auth(Signup, false)} />
          <Route path="/" exact component={Auth(SearchProduct, null)} />
          <Route
            path="/productos/:id"
            exact
            component={Auth(DetailProduct, null)}
          />
          <Route path="/carrito" exact component={Auth(Cart, true)} />
          <Route
            path="/product-manager"
            exact
            component={Auth(ProductManager, true, true)}
          />
          <Route
            path="/product-manager/:id"
            exact
            component={Auth(EditProduct, true, true)}
          />
          <Route
            path="/subir"
            exact
            component={Auth(UploadProduct, true, true)}
          />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
