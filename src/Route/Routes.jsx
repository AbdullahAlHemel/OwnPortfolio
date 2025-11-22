import { createBrowserRouter } from "react-router-dom";
import PageLoaderWrapper from "../components/PageLoaderWrapper/PageLoaderWrapper";
import ErrorPage from "../Main/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLoaderWrapper />,
    errorElement: <ErrorPage />,
  },
]);
