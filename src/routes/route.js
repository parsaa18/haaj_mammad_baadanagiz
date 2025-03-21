import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth/auth";

export const publicRoutes = createBrowserRouter([...authRoutes]);
