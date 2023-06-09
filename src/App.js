import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home.";
import ProductsPage from "./pages/Products";
import ProductsRootPage from "./pages/ProductsRoot";
import ProductDetailPage from "./pages/ProductDetail";
import NewProductPage from "./pages/NewProduct";
import EditProductPage from "./pages/EditProduct";
import CartPage from "./pages/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "./store/cart-actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        element: <ProductsRootPage />,
       
        children: [
          { index: true, element: <ProductsPage />},
          {
            path: ":id",
            id: "product-detail",
            children: [
              { index: true, element: <ProductDetailPage /> },
              { path: "edit", element: <EditProductPage /> },
            ],
          },
          { path: "new", element: <NewProductPage /> },
        ],
      },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());

  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
