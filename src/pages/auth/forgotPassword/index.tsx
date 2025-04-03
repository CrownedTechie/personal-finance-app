import { AuthWrapper, Button, TextField, Typography } from "@/components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "react-toastify";
import { getErrorMessage } from "@/utils/getErrorMessage";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid Email Address"),
}).required();

type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const { 
   register, 
   handleSubmit,
   formState: {errors, isSubmitting}
  } = useForm<ForgotPasswordSchemaType>({
   resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = async (data: ForgotPasswordSchemaType) => {
   try {
    await sendPasswordResetEmail(auth, data.email);
    navigate("/");
    toast.success("Password reset link sent! Check your email.");
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
     Reset Password
    </Typography>
 
    <form onSubmit={handleSubmit(onSubmit)}>
     <TextField 
       id="email"
       fieldName="email"
       register={register}
       inputType="email"
       labelText="Email"
       inputPlaceholder="Enter your email"
       helperText={errors.email?.message}
     />
      
     <Button 
       variant="primary"
       customClass="w-full mt-400"
       loading={isSubmitting}
     >
       Reset Password
     </Button>
    </form>

    <div className="flex flex-col gap-100">
     <Typography
      color="grey500"
      customClass="flex items-center justify-center gap-100"
     >
      Don't have an account?
      <Link to="/signup">
       <Typography
         as="span"
         fontWeight="bold"
         customClass="underline underline-offset-auto text-xl"
       >
        Sign up
       </Typography>
      </Link>
     </Typography>
     <Typography
      color="grey500"
      customClass="flex items-center justify-center gap-100"
     >
      Go back to
       <Link to="/" className="flex items-center">
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
   </div>
  </AuthWrapper>
 );
}