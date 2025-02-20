import { Button, Sidebar, TextField, Typography } from "../../components";
import { colorOptions, fruitOptions } from "../../constants/data";
import { PiCaretLeftFill, PiCaretRightFill, PiCaretDownFill, PiCaretUpFill, PiArrowsDownUpFill, PiHouseFill, PiChartDonutFill, PiReceiptFill, PiDotsThreeOutlineFill, PiListBulletsBold, PiMagnifyingGlass, PiPottedPlantFill, PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill, PiCheckCircleFill, PiWarningCircleFill, PiWrenchFill, PiNetworkFill, PiVideoFill, PiBarbellFill, PiMusicNoteFill, PiBookOpenTextFill, PiShieldPlusFill, PiWarehouseFill, PiFunnelFill, PiSortAscendingFill, PiSortDescendingFill, PiEyeFill, PiEyeSlashFill, PiXCircleLight, PiTipJarLight, PiTipJarFill } from "react-icons/pi";

export const Component = () => {
 return ( 
  <>
   <Typography 
    as="h1"
    customClass="text-center mt-300"
   >
    Components Page
   </Typography>

   <Sidebar />

   {/* Add border to the main and div */}
   <main className=" mt-300 ml-64 mx-auto transition-all duration-300">
    <div className="mt-9 mx-500 flex flex-col justify-center">

     {/* PROJECT ICONS */}
     <Typography 
      as="h2"
      customClass="mb-200 underline"
     >
      Project icons:
     </Typography>
     <div className="flex flex-wrap mb-300 gap-100 text-xl">
      <PiCaretLeftFill />
      <PiCaretRightFill />
      <PiCaretDownFill />
      <PiCaretUpFill />
      <PiArrowsDownUpFill />
      <PiHouseFill />
      <PiChartDonutFill />
      <PiReceiptFill />
      <PiDotsThreeOutlineFill />
      <PiListBulletsBold />
      <PiMagnifyingGlass />
      <PiPottedPlantFill />
      <PiArrowFatLinesLeftFill />
      <PiArrowFatLinesRightFill />
      <PiCheckCircleFill />
      <PiWarningCircleFill />
      <PiWrenchFill />
      <PiNetworkFill />
      <PiVideoFill />
      <PiBarbellFill />
      <PiMusicNoteFill />
      <PiBookOpenTextFill />
      <PiShieldPlusFill />
      <PiWarehouseFill />
      <PiFunnelFill />
      <PiSortAscendingFill />
      <PiSortDescendingFill />
      <PiEyeFill />
      <PiEyeSlashFill />
      <PiXCircleLight />
      <PiTipJarLight />
      <PiTipJarFill />
     </div>

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
    
     {/* BUTTONS */}
     <div className="flex items-center flex-wrap gap-300 mt-500 ">
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

     {/* TEXT FIELDS */}
     <div className="mt-500 flex gap-500 flex-wrap items-center">
      <TextField 
        inputType="text"
        labelText="Basic Field"
        helperText="Helper text"
      />
      <TextField
        inputType="text"
        labelText="Field With Icon" 
        helperText="Helper text"
        icon={<PiMagnifyingGlass  className="size-200 text-grey900" />}
      />
      <TextField
        inputType="text"
        labelText="Field With Prefix" 
        helperText="Helper text"
        prefix
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
   </main>
  </>
 );
}