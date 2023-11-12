import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { isAuthenticated, name, token } = useSelector(
    (state: RootState) => state.auth
  );

  return { isAuthenticated, name, token };
};
