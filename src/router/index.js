import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About/About"
import First from "../pages/First"
import Contact from "../pages/Contact/contact"
import Home from "../pages/Home"
import routes from "./config";
import GlobalStyles from "../globalStyles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <GlobalStyles />
      
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
        <Route path="/First">
      <First />
    </Route>
        <Route path="/contact">
      <Contact />
    </Route>
      </Switch>
    </Suspense>
  );
};

export default Router;
