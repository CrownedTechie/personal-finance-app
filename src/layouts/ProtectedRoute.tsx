import { PageLoader } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
 // Checking if a user is authenticated before granting access
 const { user, loading } = useAuth();
 if(loading) <PageLoader />
 return user ? <Outlet /> : <Navigate to="/"  replace/>;
};