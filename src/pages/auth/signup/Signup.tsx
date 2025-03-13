import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { PiEyeFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const signUpSchema = z.object({
  // username: 
});

export const Signup = () => {
  const { 
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

 return ( 
  <AuthWrapper>
   <div className="flex flex-col justify-center gap-400">
    <Typography 
     as="h1"
     fontWeight="bold"
    >
     Sign Up
    </Typography>
 
    <form>
      <div className="flex flex-col gap-200 justify-center">
        <TextField 
          id="username"
          name="username"
          inputType="text"
          labelText="Name"
          inputPlaceholder="Enter your name"
        />
        <TextField 
          id="email"
          name="email"
          inputType="email"
          labelText="Email"
          inputPlaceholder="Enter your email"
        />
        <TextField 
          id="password"
          name="password"
          inputType="password"
          labelText="Password"
          inputPlaceholder="Enter your password"
          helperText="Passwords must be at least 8 characters"
          icon={<PiEyeFill size-200 text-grey900 />}
        />
      </div>
      
      <Button 
        variant="primary"
        customClass="w-full mt-400"
      >
        Create Account
      </Button>
    </form>

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