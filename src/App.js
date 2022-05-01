import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./assets/css/paper-dashboard.min.css";
import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Landingpage from "./components/Landingpage/Landingpage";
import Loginc from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/Privacy/Privacy";
import Products from "./components/Products/Products";
import Dashboard from "./components/Dashboard/Dashboard";
import Terms from "./components/Terms/Terms";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import NotFound from "./components/NotFound/NotFound";
import MyAccount from "./components/MyAccount/MyAccount";
import Under_construction from "./components/Under_construction/Under_construction";
import Static_website_domain from "./components/Static_website_domain/Static_website_domain";
import Dynamic_website_development_team from "./components/Dynamic_website_development_team/Dynamic_website_development_team";
import Website_app_development_team from "./components/Website_app_development_team/Website_app_development_team";
import Domains from "./components/Domains/Domains";
import Hosting from "./components/Hosting/Hosting";
import Development from "./components/Development/Development";
import Results from "./components/Results/Results";
import Basket from "./components/Basket/Basket";
import Checkout from "./components/Checkout/Checkout";
import Confirmation from "./components/Confirmation/Confirmation";
import Payment from "./components/Payment/Payment";
import Domain from "./components/Domain/Domain";
import Delegation from "./components/Delegation/Delegation";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
const history = useHistory();
  
  return(
  <div className="App">
    <Nav history={history} />
    <Switch>
      <Route exact path="/" component={Landingpage} />
      <Route  history={history} path="/login" component={Loginc} />
      <Route path="/register/:registerplan?/:registerpackage?" component={Register} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/products" component={Products} />
      <Route path="/terms" component={Terms} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/hosting" component={Hosting} />
      <Route path="/development" component={Development} />
      <Route path="/under_construction" component={Under_construction} />
      <Route
        path="/Static website & domain"
        component={Static_website_domain}
      />
      <Route
        path="/Dynamic website + development team"
        component={Dynamic_website_development_team}
      />
      <Route
        path="/Website + app + development team"
        component={Website_app_development_team}
      />
      <Route path="/results" component={Results} />
      <Route path="/basket" component={Basket} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/payment" component={Payment} />
      <PrivateRoute exact path="/domains" component={Domains}/>
      <PrivateRoute path="/domains/:domain_id" component={Domain}/>
      <PrivateRoute path="/domains/:domain_id/edit-delegation" component={Delegation} />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <PrivateRoute path="/my-account" component={MyAccount} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
)};

export default App;
