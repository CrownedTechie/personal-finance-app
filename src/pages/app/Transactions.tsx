import { ContentHeader, TextField, Typography } from "@/components";
import { Table } from "@/components/table";
import { categoryOptions, filterOptions, transactionsList } from "@/constants/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formattedAmount } from "@/utils/formatAmount";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { PiFunnelFill, PiMagnifyingGlass, PiSortDescendingFill } from "react-icons/pi";

export type Transactions = {
 profilePicture: string;
 name: string;
 category: string;
 date: string;
 amount: number;
};

const columnsDesktop: ColumnDef<Transactions>[] = [
  {
   accessorKey: "name",
   header: "recipient / sender",
   cell: ({ cell, row }) => {
      return (
       <Typography 
        fontWeight="bold"
        customClass="flex items-center gap-200 capitalize"
       >
         <img src={row.original.profilePicture} alt="" className="size-500 rounded-full" />
         {cell.getValue() as string}
       </Typography>
      )
   },
  },
  {
   accessorKey: "category",
   header: "category",
   cell: info => 
    <Typography 
     as="span"
     color="grey500"
     customClass="capitalize"
    >
     {info.getValue() as string}
    </Typography>,
  },
  {
   accessorKey: "date",
   header: () => 'Transaction Date',
   cell: info => 
    <Typography
     as="span"
     color="grey500"
     customClass="capitalize"
    >
     {info.getValue() as string}
    </Typography>,
  },
  {
   accessorKey: "amount",
   header: () => 
    <Typography 
     as="span" 
     color="grey500" 
     customClass="block text-right"
    >
     amount
    </Typography>,
   cell: info => {
    const infoValue = formattedAmount(info.getValue() as number);
    const isDebitValue = infoValue.includes("-");
    return (
      <Typography
       color={isDebitValue ? "grey900" : "green"}
       fontWeight="bold"
       customClass="text-right"
      >
      {isDebitValue ? infoValue : `+${infoValue}`}
     </Typography>)}  
  },
];

const columnsMobile: ColumnDef<Transactions>[] =[
  {
   id: "mobile-table",
   cell: ({ row }) => {
      const date = row.original.date;
      const amount = row.original.amount;
      const profilePicture = row.original.profilePicture;
      return (
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-150">
         <img src={profilePicture} alt="" className="size-500 rounded-full" />
          <div>
           <Typography 
            fontWeight="bold"
            customClass="flex items-center gap-200 capitalize"
           >
             {row.original.name}
           </Typography>
           <Typography
            as="span" 
            color="grey500"
            customClass="capitalize"
           >
             {row.original.category}
           </Typography>
          </div> 
        </div>

        <div className="flex flex-col items-end gap-100">
        <Typography
         color={String(amount).includes("-") ? "grey900" : "green"}
         fontWeight="bold"
        >
         {String(amount).includes("-") ? formattedAmount(amount) : `+${formattedAmount(amount)}`}
        </Typography>
        <Typography
         as="span"
         color="grey500"
        >
         {date}
        </Typography>
       </div>
       </div>
      )
   },
  },
];

const SearchAndFilters = () => {
 const isDesktop = useMediaQuery("(min-width: 768px)");

 return (
  <div className="flex items-center justify-between gap-300">
   <TextField
    id="seach transaction"
    fieldName="search transaction"
    inputPlaceholder="Search transaction"
    icon={<PiMagnifyingGlass  className="size-200 text-grey900" />}
    customClass="w-[13rem] xl:w-[20rem]"
   />
   <div className="flex items-center justify-around gap-300 md:w-full xl:w-auto">
    {isDesktop 
     ? (
      <>
       <TextField
       id="filter options"
       fieldName="filter options"
       fieldType="select"
       labelText="Sort by"
       selectOptions={filterOptions}
       selectDefaultValue={filterOptions[0]}
       customClass="flex-row items-center gap-100"
       labelTextFontWeight="regular"
       selectCustomClass="w-[7rem]"
      />
      <TextField
        id="category options"
        fieldName="category options"
        fieldType="select"
        labelText="Category"
        selectOptions={categoryOptions}
        selectDefaultValue={categoryOptions[0]}
        customClass="flex-row items-center gap-100"
        labelTextFontWeight="regular"
        selectCustomClass="w-[11.1rem]"
      />
      </>)
     : (
      <>
       <PiSortDescendingFill className="size-250 text-grey900" />
       <PiFunnelFill className="size-250 text-grey900" />
      </>
     )
    }
    
   </div>
 </div>
)};

export const Transactions = ({}) => {
 const [currentPage, setCurrentPage] = useState(0);
 const itemsPerPage = 10; 
 const isDesktop = useMediaQuery("(min-width: 768px)");

 const columns = useMemo(() => 
  isDesktop 
   ? columnsDesktop 
   : columnsMobile
 , [isDesktop]);

 return ( 
  <div className="flex flex-col gap-400 h-auto ">
   <header>
    <ContentHeader
     title="transactions" 
     as="h1"
     fontWeight="bold"
    />
   </header>

   <section>
    <Table<Transactions>
     dataList={transactionsList}
     columns={columns}
     currentPage={currentPage}
     setCurrentPage={setCurrentPage}
     itemsPerPage={itemsPerPage}
     additionalTableData={<SearchAndFilters />}
    />
   </section>
  </div>
 );
}