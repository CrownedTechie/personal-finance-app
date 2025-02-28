
import { Button, TextField, Typography } from '@/components'
import {
 ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { TableWrapper } from './TableWrapper';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { categoryOptions, filterOptions, transactionsList } from '@/constants/data';
import { formattedAmount } from '@/utils/formatAmount';
import ReactPaginate from 'react-paginate';

export type Transactions = {
 profilePicture: string;
 name: string;
 category: string;
 date: string;
 amount: number;
};

const columns: ColumnDef<Transactions>[] = [
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

export const Table = ({}) => {
 const [data, _setData] = useState(() => [...transactionsList]);
 const [currentPage, setCurrentPage] = useState(0);
 const itemsPerPage = 4; // Change as needed

 // Calculate paginated data
  const currentData = useMemo(() => {
    const startOffset = currentPage * itemsPerPage;
    return data.slice(startOffset, startOffset + itemsPerPage);
  }, [currentPage, data]);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

 const table = useReactTable({
   data: currentData,
   columns,
   getCoreRowModel: getCoreRowModel(),
 });

 return ( 
  <TableWrapper>
   <div className="flex flex-col justify-center gap-300">
    {/* Search and filters */}
    <div className="flex items-center justify-between">
     <TextField
      inputPlaceholder="Search transaction"
      icon={<PiMagnifyingGlass  className="size-200 text-grey900" />}
     />
     <div className="flex items-center gap-300">
      <TextField
       fieldType="select"
       labelText="Sort by"
       selectOptions={filterOptions}
       selectDefaultValue={filterOptions[0]}
       customClass="flex-row items-center gap-100"
       labelTextFontWeight="regular"
      />
      <TextField
       fieldType="select"
       labelText="Category"
       selectOptions={categoryOptions}
       selectDefaultValue={categoryOptions[0]}
       customClass="flex-row items-center gap-100"
       labelTextFontWeight="regular"
      />
     </div>
    </div>

    {/* Table */}
    <table>
     <thead>
      {table.getHeaderGroups().map(headerGroup => (
       <tr key={headerGroup.id}>
         {headerGroup.headers.map(header => (
           <th key={header.id} className="px-200 py-250">
              <Typography 
               as="span"
               color="grey500"
               customClass="text-left block capitalize"
              >
               {header.isPlaceholder
               ? null
               : flexRender(
                   header.column.columnDef.header,
                   header.getContext()
                 )}
              </Typography>
           </th>
         ))}
       </tr>
      ))}
     </thead>
     <tbody>
       {table.getRowModel().rows.map(row => (
         <tr key={row.id}>
           {row.getVisibleCells().map(cell => (
             <td 
              key={cell.id} 
              className="px-200 py-250 border-t border-t-grey100"
             >
               {flexRender(cell.column.columnDef.cell, cell.getContext())}
             </td>
           ))}
         </tr>
       ))}
     </tbody>
    </table>

    {/* Pagination */}
    <div className="mt-4 flex items-center justify-between">
     {/* Previous Button */}
     <Button
      variant="pagination"
      paginationDirection="prev"
      onClick={() => handlePageClick({selected: currentPage - 1})}
      disabled={currentPage === 0}
      customClass={currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
     >
      Prev
     </Button>
     {/* Centered Page Numbers */}
     <ReactPaginate
       previousLabel={null} // Hide previous from main container
       nextLabel={null} // Hide next from main container
       pageCount={pageCount}
       forcePage={currentPage}
       onPageChange={handlePageClick}
       containerClassName="flex items-center gap-100" // Just spacing for page numbers
       pageClassName="size-500 cursor-pointer flex items-center justify-center text-grey900 border border-beige500 hover:text-white hover:bg-beige500 font-regular p-200 rounded-100 text-sm"
       activeClassName="bg-grey900 text-white border-transparent"
       disabledClassName="opacity-50 cursor-not-allowed"
     />
     <Button 
      variant="pagination" 
      paginationDirection="next"
      onClick={() => handlePageClick({selected: currentPage + 1})}
      disabled={currentPage === pageCount - 1}
      customClass={currentPage === pageCount - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
     >
      Next
     </Button>
    </div>
    
   </div>
  </TableWrapper>
 );
}