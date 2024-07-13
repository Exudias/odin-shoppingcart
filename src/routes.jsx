import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./layouts/HeaderMainLayout";

const routes = [
  {
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/products",
            element: <ProductsPage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        }
    ]
  }
];

export default routes;
