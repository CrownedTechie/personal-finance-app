import { createContext, ReactNode, useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";

interface IAuthContextProps {
  user: User | null;
  loading: boolean;
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
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};