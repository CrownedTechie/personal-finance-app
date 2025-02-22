import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

type Props = {
 
}
export const Signup = ({}: Props) => {
 return ( 
  <AuthWrapper>
   <div className="flex flex-col justify-center gap-400">
    <Typography 
     as="h1"
     fontWeight="bold"
    >
     Sign Up
    </Typography>
 
    <div className="flex flex-col gap-200 justify-center">
     <TextField 
      inputType="text"
      labelText="Name"
      inputPlaceholder="Enter your name"
     />
     <TextField 
       inputType="email"
       labelText="Email"
       inputPlaceholder="Enter your email"
     />
     <TextField 
       inputType="password"
       labelText="Password"
       inputPlaceholder="Enter your password"
       helperText="Passwords must be at least 8 characters"
       icon={<PiEyeFill size-200 text-grey900 />}
     />
    </div>
    
    <Button 
     variant="primary"
     customClass="w-full"
    >
     Create Account
    </Button>
 
    <Typography
     color="grey500"
     customClass="flex items-center justify-center gap-100"
    >
     Already have an account?
     <Link to="/login">
      <Typography 
       fontWeight="bold"
       customClass="underline underline-offset-auto"
      >
       Login
      </Typography>
     </Link>
    </Typography>
   </div>
  </AuthWrapper>
 );
}