import { useState } from "react";
import { Button, Container, ContentHeader, Quote, Sidebar, SummaryCard, Typography } from "@/components";
import { recurringBills, savingsOptions } from "@/constants/data";
import { PiCaretLeftFill, PiCaretRightFill, PiCaretDownFill, PiCaretUpFill, PiArrowsDownUpFill, PiHouseFill, PiChartDonutFill, PiReceiptFill, PiDotsThreeOutlineFill, PiListBulletsBold, PiMagnifyingGlass, PiPottedPlantFill, PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill, PiCheckCircleFill, PiWarningCircleFill, PiWrenchFill, PiNetworkFill, PiVideoFill, PiBarbellFill, PiMusicNoteFill, PiBookOpenTextFill, PiShieldPlusFill, PiWarehouseFill, PiFunnelFill, PiSortAscendingFill, PiSortDescendingFill, PiEyeFill, PiEyeSlashFill, PiXCircleLight, PiTipJarLight, PiTipJarFill } from "react-icons/pi";

export const Component = () => {

 //Todo: render the isOpen state here so that main can have it too. Then pass it to the others through the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(true);
 
 return ( 
  <main className="flex flex-col-reverse lg:flex-row w-screen max-h-screen">
   <Sidebar 
    isOpen={isOpen}
    setIsOpen={setIsOpen}
   />

   <Container>
    <header className="mb-300">
      <ContentHeader
        title="overview"
        as="h1" 
        fontWeight="bold"
      />
    </header>
     
    <main>
      <div className="flex flex-col justify-center">

        {/* <div className="mt-500 bg-white p-300">
        <DoughnutChart />
        </div> */}

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

      {/* Typography */}
      <div>
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
      </div>

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
      {/* <div className="mt-500 flex flex-col lg:flex-row flex-wrap gap-300 lg:gap-500 lg:items-center">
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

        <TextField
          fieldType="select"
          labelText="Sort by"
          selectOptions={filterOptions}
          selectDefaultValue={filterOptions[0]}
          customClass="flex-row items-center gap-100"
          labelTextFontWeight="regular"
        />
      </div> */}
      
      {/* Summary cards */}
      <div className="mt-500 flex flex-wrap flex-col md:flex-row md:items-center gap-150 ">
        <SummaryCard 
          variant="primary"
          title="current balance"
          content="$4,836.00"
        />
        <SummaryCard 
          variant="secondary"
          title="income"
          content="$3,814.25"
          icon={<PiTipJarLight className="size-500" />}
        />
        <SummaryCard 
          variant="tertiary"
          title="expenses"
          content="$1,700.50"
        />
      </div>

      {/* Quote cards secondary*/}
      <div className="mt-500 bg-white p-100 flex gap-200 items-center flex-col md:flex-row ">
        {recurringBills.map(item => (
          <Quote
            variant="secondary" 
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>
        {/* Quote cards primary */}
      <div className="mt-500 bg-white p-100 grid grid-cols-2 place-items-center gap-200">
        {savingsOptions.map(item => (
          <Quote
            variant="primary"
            title={item.title}
            amount={item.amount}
          />
        ))}
      </div>

        {/* Overview card */}
        {/* <div className="mt-400">
          <OverviewCard
            cardTitle="Transactions"
            buttonTitle="See Details"
            customClass="gap-400"
          />
        </div> */}

      
      
      </div>
    </main>
   </Container>
  </main>
 );
};