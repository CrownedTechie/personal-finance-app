import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

type Props = {
 
}
export const Login = ({}: Props) => {
 return ( 
 <AuthWrapper>
  <div className="flex flex-col justify-center gap-400">
   <Typography 
    as="h1"
    fontWeight="bold"
   >
    Login
   </Typography>

   <div className="flex flex-col gap-200 justify-center">
    <TextField 
      inputType="email"
      labelText="Email"
      inputPlaceholder="Enter your email"
    />
    <TextField 
      inputType="password"
      labelText="Password"
      inputPlaceholder="Enter your password"
      icon={<PiEyeFill size-200 text-grey900 />}
    />
   </div>
   
   <Button 
    variant="primary"
    customClass="w-full"
   >
    Login
   </Button>

   <Typography
    color="grey500"
    customClass="flex items-center justify-center gap-100"
   >
    Need to create an account?
    <Link to="/signup">
     <Typography 
      fontWeight="bold"
      customClass="underline underline-offset-auto"
     >
      Sign Up
     </Typography>
    </Link>
   </Typography>
   
  </div>
 </AuthWrapper>
 );
}