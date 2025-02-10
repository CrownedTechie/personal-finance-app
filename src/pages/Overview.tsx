import { Button, Typography } from "../components";

type Props = {
 
}

export const Overview = ({}: Props) => {
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
      This is a span element that will use custom font size on.
    </Typography>


    <div className="flex gap-8 ">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="destroy">Placeholder</Button>
    </div>
   </div>
  </>
 );
}