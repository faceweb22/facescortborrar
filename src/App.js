
import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import { Route } from "react-router-dom";
import UserDetailContainer from "./components/UserDetailContainer";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Provincia from "./components/Provincia";


function App() {
  return (    
    
    <BrowserRouter>

    <Switch>


      <Route exact path="/facescort/buenos-aires/:ubicacion">
        <NavBar/>
        <Users/>
      </Route>

      <Route exact path="/facescort/:nombre-:id-:wp">
        <NavBar/>
        <UserDetailContainer/>
      </Route>
      
      <Route path="/facescort/buenos-aires">
        <NavBar/>
        <Users/>
      </Route>

      <Route path="/facescort/contacto">
        <NavBar/>
        <Contacto/>
      </Route>
      <Route path="/facescort">
        <Provincia/>
        <Footer/>
      </Route>


    </Switch>
    

    </BrowserRouter>
  );
}

export default App;
