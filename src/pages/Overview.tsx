import { Button, TextField, Typography } from "../components";
import { IoSearchOutline } from "react-icons/io5";
import { LiaDollarSignSolid } from "react-icons/lia";
import { SelectDropdown } from "../components/selectDropdown";

export const Overview = ({}) => {
 return ( 
  <>
   <h1>Overview page</h1>

   <div className="mt-9 mx-500">
    <Typography>
     This is me just testing the Typography component 1
     Default Variant
    </Typography>

    <Typography
     as="h1"
     color="magenta"
    >
     Heading 1
     This is me just testing the Typography component 2
    </Typography>

    <Typography
     as="del"
     color="beige500"
     customClass="text-[20px]"
     fontWeight="bold"
    >
     Heading 2
     This is me just testing the Typography component 3
    </Typography>

    <Typography
     as="span"
     customClass="block"
     color="armyGreen"
     fontSize="xl"
    >
      This is a span element with custom font size.
    </Typography>


    <div className="flex items-center gap-300 mt-500 ">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="destroy">Placeholder</Button>
      <Button variant="pagination" paginationDirection="prev">Prev</Button>
      <Button variant="pagination" paginationDirection="next">Next</Button>
      <Button variant="pagination" customClass="size-500">1</Button>
      <Button variant="pagination" customClass="size-500 bg-grey900 text-white border-transparent">2</Button>
      <Button variant="pagination" customClass="size-500">3</Button>
    </div>

    <div className="mt-500 flex gap-500 items-center">
      <TextField 
        labelText="Basic Field"
        helperText="Helper text"
      />
      <TextField
        labelText="Field With Icon" 
        helperText="Helper text"
        icon={<IoSearchOutline className="size-250 text-grey900" />}
      />
      <TextField
        labelText="Field With Prefix" 
        helperText="Helper text"
        prefix={<LiaDollarSignSolid className="size-250 text-beige500" />}
      />

    <SelectDropdown />

    </div>

   </div>
  </>
 );
}