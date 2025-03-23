import { AuthImage, LogoLarge } from "@/assets/svgs";
import { PageLoader, Typography } from "@/components";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   let timeoutId: NodeJS.Timeout;
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     timeoutId = setTimeout(() => {
  //     if (user) {
  //       navigate("overview"); // Redirecting to login page if the user is not authenticated
  //     } 
  //       setLoading(false); // Set loading to false after auth check
  //     }, 1000);
  //   });

  //   return () => {
  //     unsubscribe();
  //     clearTimeout(timeoutId);
  //   };
  // }, [navigate]);

  // if (loading) {<PageLoader />}

 return ( 
  <main className="flex items-center justify-center flex-col xl:flex-row w-screen h-screen p-250">
    <aside className="xl:hidden fixed top-0 left-0 bg-grey900 h-[4.36rem] w-full rounded-b-100 flex items-center justify-center">
      <LogoLarge />
    </aside>

    <aside className="rounded-150 hidden xl:block w-[51%] max-w-[60%] relative">
      <AuthImage className="rounded-150 w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col justify-between p-500 z-50">
        <LogoLarge />

        <div className="flex flex-col gap-300">
          <Typography
            fontSize="xl"
            fontWeight="bold"
            color="beige100"
          >
            Keep track of your money and save for your future
          </Typography>
          <Typography
            color="beige100"
          >
            Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
          </Typography>
        </div>
      </div>
    </aside>

   <div className="mx-auto w-full flex justify-center items-center mt-[4.36rem] md:mt-0">
     <Outlet />
   </div>
  </main>
 );
}