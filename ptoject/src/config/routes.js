import routeBox from "../constants/routeBox";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import AuthGuard from "../Guard/AuthGuard";
const appRoutes = [
  { path: routeBox.home, component: Home },
  { path: routeBox.products, component: Products, Guard: AuthGuard },
  { path: routeBox.SignIn, component: SignIn },
  { path: routeBox.signUp, component: SignUp },
];
export default appRoutes;
