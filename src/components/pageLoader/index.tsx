import { BiLoaderAlt } from "react-icons/bi";

export const PageLoader = () => {
 return ( 
  <div className="flex justify-center items-center h-screen ">
   <BiLoaderAlt className=" animate-spin size-[4rem] text-green"/>
  </div>
 );
}