import { FirebaseError } from "firebase/app";

export const getErrorMessage = (error: unknown): string => {
 if (error instanceof FirebaseError) {
  // Checking what error code is received  
  console.log("Error Code:", error.code); 
  switch (error.code) {
   case "auth/email-already-in-use":
     return "This email is already in use.";
   case "auth/invalid-email":
     return "Invalid email address.";
   default:
     return error.message; // Defaulting to Firebase's error message
  }
 }
  return "An unexpected error occurred";
};