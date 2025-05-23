import { createRootRoute, createRoute, Router } from "@tanstack/react-router";
import { AppLayout } from "../components/layout";
import { Home } from "../pages/home";
import { Products } from "../pages/products";
import { About } from "../pages/about";
import UsersPage from "../pages/users";
import ProductsManagementPage from "../pages/products-management";
import SellsManagementPage from "../pages/sells-management";
import { CuponesPage } from "../pages/cupones";
import CartView from "../pages/cart";
import ProductDetailsView from "../pages/product-details";
import LoginView from "../pages/login";
import RegisterView from "../pages/register";
import { CheckoutPage } from "../store";
const rootRoute = createRootRoute({
  component: AppLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: UsersPage,
});

const productsManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products-management",
  component: ProductsManagementPage,
});

const sellsManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sells-management",
  component: SellsManagementPage,
});

const couponsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coupons",
  component: CuponesPage,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartView,
});

const productDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product-details",
  component: ProductDetailsView,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginView,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterView,
});

const checkoutPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkoutpage",
  component: CheckoutPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  aboutRoute,
  usersRoute,
  productsManagementRoute,
  sellsManagementRoute,
  couponsRoute,
  cartRoute,
  productDetailsRoute,
  loginRoute,
  registerRoute,
  checkoutPageRoute,
]);

export const router = new Router({ routeTree });
