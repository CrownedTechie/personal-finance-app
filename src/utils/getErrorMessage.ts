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
		case "auth/invalid-credential":
			return "Login failed. Invalid email or password.";
		case "permission-denied":
			return "Permission denied.";
		case "unavailable":
			return "Unable to fetch data from the server at the moment. Try again"
		default:
			return error.message; // Defaulting to Firebase's error message
	}
 }
	return "An unexpected error occurred";
};