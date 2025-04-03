import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { auth } from "@/config/firebase";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(8, "Password must be at least 8 characters")
}).required();

type LoginSchemaType = z.infer<typeof loginSchema>;

export const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/overview");
      toast.success("Logged in Successfully");
    } catch(error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage);
    }
  };

 return ( 
 <AuthWrapper>
  <div className="flex flex-col justify-center gap-400">
   <Typography 
    as="h1"
    fontWeight="bold"
   >
    Login
   </Typography>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-200 justify-center">
        <TextField 
          id="email"
          fieldName="email"
          register={register}
          inputType="email"
          labelText="Email"
          inputPlaceholder="Enter your email"
          helperText={errors?.email?.message}
        />
        <TextField 
          id="password"
          fieldName="password"
          register={register}
          inputType={showPassword ? "text" : "password"}
          labelText="Password"
          inputPlaceholder="Enter your password"
          helperText={errors?.password?.message}
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
        Login
      </Button>
    </form>

    <div className="flex flex-col gap-100">
      <Typography
        color="grey500"
        customClass="flex items-center justify-center gap-100"
      >
        Need to create an account?
        <Link to="/signup" className="flex items-center">
        <Typography
          as="span" 
          fontWeight="bold"
          customClass="underline underline-offset-auto"
        >
          Sign Up
        </Typography>
        </Link>
      </Typography>
      <Typography
        color="grey500"
        customClass="flex items-center justify-center gap-100"
      >
        Forgot password? 
        <Link to="/reset-password" className="flex items-center">
        <Typography
          as="span" 
          fontWeight="bold"
          customClass="underline underline-offset-auto"
        >
          Click here
        </Typography>
        </Link>
      </Typography>
    </div>
  </div>
 </AuthWrapper>
 );
}