import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from "react";

const signUpSchema = z.object({
  username: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(8, "Password must be at least 8 characters")
}).required();

type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const Signup = () => {
  const [ showPassword, setShowPassword ] = useState(false); 

  const { 
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
  };

  //TODO: Work on clearing errors while we're typing
  //TODO: Show Password 


 return ( 
  <AuthWrapper>
   <div className="flex flex-col justify-center gap-400">
    <Typography 
     as="h1"
     fontWeight="bold"
    >
     Sign Up
    </Typography>
 
    <form onSubmit={handleSubmit(onSubmit, (err)=> console.log(err))}>
      <div className="flex flex-col gap-200 justify-center">
        <TextField 
          id="username"
          fieldName="username"
          register={register}
          inputType="text"
          labelText="Name"
          inputPlaceholder="Enter your name"
          helperText={errors.username?.message}
        />
        <TextField 
          id="email"
          fieldName="email"
          register={register}
          inputType="email"
          labelText="Email"
          inputPlaceholder="Enter your email"
          helperText={errors.email?.message}
        />
        <TextField 
          id="password"
          fieldName="password"
          register={register}
          inputType={showPassword ? "text" : "password"}
          labelText="Password"
          inputPlaceholder="Enter your password"
          helperText={errors.password?.message}
          icon={
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>
              {
                showPassword 
                ? <PiEyeSlashFill className="text-grey900 size-200" />
                : <PiEyeFill className="text-grey900 size-200" />
              }
            </button>
          }
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
        as="span"
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