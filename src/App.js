import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./utils/RootPage";
import Home from "./pages/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <RootPage />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
