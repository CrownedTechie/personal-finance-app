import { createContext, ReactNode, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "react-toastify";
import { getErrorMessage } from "@/utils/getErrorMessage";

interface IAuthContextProps {
  user: User | null;
  loading: boolean;
  logout: () => void;
};

interface IAuthProviderProps {
 children: ReactNode;
}

export const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully!");
    } catch(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};