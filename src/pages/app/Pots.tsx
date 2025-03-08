import { Button, ContentHeader } from "@/components";

type Props = {
 
}
export const Pots = ({}: Props) => {
 return ( 
  <div>
   <header>
    <ContentHeader
     title="pots" 
     as="h1"
     fontWeight="bold"
     buttonGroup={
     <Button
      variant="primary"
     >
      + Add New Pot
     </Button>
     }
    />
   </header>
  </div>
 );
}