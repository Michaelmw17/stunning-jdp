import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../pages/About/About"
import Services from "../pages/Services/services"
import Contact from "../pages/Contact/contact"
import Home from "../pages/Home"
// import FullWidthGrid from "../components/LightBlub/lightBlub";
import routes from "./config";
import GlobalStyles from "../globalStyles";
// import { Contact } from "../components/ContactForm/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
            
          );
        })}
        <Route exact path='/' >
        <Home/>
        </Route>
        <Route path="/About">
      <About />
    </Route>
        <Route path="/services">
      <Services />
    </Route>
        <Route path="/contact">
      <Contact />
    </Route>
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
