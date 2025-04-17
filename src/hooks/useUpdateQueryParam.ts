// This hook allows you to update a specific query parameter of your choice in the URL.
import { useNavigate, useLocation } from "react-router-dom";

export const useUpdateQueryParam = () => {
 const navigate = useNavigate();
 const location = useLocation();

 return (key: string, value: string) => {
  const params = new URLSearchParams(location.search);
  params.set(key, value);
  navigate({ search: params.toString() }, { replace: true });
 };
};
