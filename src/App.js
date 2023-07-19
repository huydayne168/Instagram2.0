import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./utils/RootPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootPage />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
