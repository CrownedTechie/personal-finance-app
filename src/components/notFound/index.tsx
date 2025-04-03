import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import { Typography } from "../typography";

export const NotFound = () => {
 const navigate = useNavigate();
 
 return ( 
  <div className="flex flex-col items-center justify-center gap-500 h-screen p-200">
   <Typography 
      as="h1" 
      color="grey500"
      fontWeight="bold"
      customClass="text-center text-[5rem]"
    >
      ERROR
      <br/> 404
    </Typography>
    <Typography  
      color="grey900"
      fontWeight="medium"
      fontSize="md"
      customClass="text-center"
    >
      The page you're trying to access doesn't exist or has been moved. 
      <br/> Try going back to our homepage
    </Typography>

    <Button 
      variant="primary"
      onClick={() => navigate("/")}
    >
      Go Back
    </Button>
  </div>
 );
}