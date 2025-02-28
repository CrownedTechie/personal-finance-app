
import { TextField, Typography } from '@/components'
import {
 ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { TableWrapper } from './TableWrapper';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { categoryOptions, filterOptions, transactionsList } from '@/constants/data';
import { formattedAmount } from '@/utils/formatAmount';

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

 const table = useReactTable({
   data,
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
   </div>
  </TableWrapper>
 );
}