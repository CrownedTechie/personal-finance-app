import { Button, TextField, Typography } from "../components";
import { IoSearchOutline } from "react-icons/io5";
import { LiaDollarSignSolid } from "react-icons/lia";
import { colorOptions, fruitOptions } from "../constants/data";

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

    <div className="mt-500 flex gap-500 flex-wrap items-center">
      <TextField 
        fieldType="input"
        labelText="Basic Field"
        helperText="Helper text"
      />
      <TextField
        fieldType="input"
        labelText="Field With Icon" 
        helperText="Helper text"
        icon={<IoSearchOutline className="size-250 text-grey900" />}
      />
      <TextField
        fieldType="input"
        labelText="Field With Prefix" 
        helperText="Helper text"
        prefix={<LiaDollarSignSolid className="size-250 text-beige500" />}
      />

      <TextField
        fieldType="select"
        labelText="Field With Color Tag" 
        helperText="Helper text"
        selectOptions={colorOptions}
        selectDefaultValue={colorOptions[0]}
      />

      <TextField
        fieldType="select"
        labelText="Field Without Color Tag" 
        helperText="Helper text"
        selectOptions={fruitOptions}
        selectPlaceholder="Select a fruit..."
      />
    </div>

   </div>
  </>
 );
}