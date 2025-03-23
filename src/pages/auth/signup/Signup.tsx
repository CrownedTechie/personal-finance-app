import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { Link, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { getErrorMessage } from "@/utils/getErrorMessage";

const signUpSchema = z.object({
  username: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(8, "Password must be at least 8 characters")
}).required();

type SignUpSchemaType = z.infer<typeof signUpSchema>;

export const Signup = () => {
  const [ showPassword, setShowPassword ] = useState<boolean>(false); 

  const { 
    register, 
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = auth.currentUser;
      console.log(user);

      // Creating a collection of users and storing them their details 
      if (user) {
        await setDoc(doc(db, "Users", user?.uid), {
          email: user.email,
          username: data.username.trim().toLowerCase(),
        });
      }
      redirect("overview");
      toast.success("Account created successfully!");
    } catch(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    }
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
 
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              customClass="border-none"
            >
              {
                showPassword 
                ? <PiEyeSlashFill className="text-grey900 size-200" />
                : <PiEyeFill className="text-grey900 size-200" />
              }
            </Button>
          }
        />
      </div>
      
      <Button 
        variant="primary"
        customClass="w-full mt-400"
        loading={isSubmitting}
      >
        Create Account
      </Button>
    </form>

    <Typography
     color="grey500"
     customClass="flex items-center justify-center gap-100"
    >
     Already have an account?
     <Link to="/">
      <Typography
        as="span"
        fontWeight="bold"
        customClass="underline underline-offset-auto text-xl"
      >
       Login
      </Typography>
     </Link>
    </Typography>
   </div>
  </AuthWrapper>
 );
}