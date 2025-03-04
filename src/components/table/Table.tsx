import { Button, Typography } from '@/components'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ReactNode, useMemo, useState } from 'react'
import { TableWrapper } from './TableWrapper';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface PaginationProps {
 pageCount: number;
 currentPage: number;
 handlePageClick: (selectedItem: { selected: number }) => void;
};

const PaginationDesktop = ({pageCount, currentPage, handlePageClick}: PaginationProps) => {
 const isDesktop = useMediaQuery("(min-width: 768px)");
 
 return (
 <div className="mt-4 flex items-center justify-between">
  {/* Previous Button */}
  <Button
   variant="pagination"
   paginationDirection="prev"
   onClick={() => handlePageClick({selected: currentPage - 1})}
   disabled={currentPage === 0}
   customClass={currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  >
   {isDesktop ? "Prev" : ""}
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
   {isDesktop ? "Next" : ""}
  </Button>
 </div>
)};

// const PaginationMobile = ({pageCount, currentPage, handlePageClick}: PaginationProps) => (
//  <div className="flex items-center justify-center">
//   {/* Previous Button */}
//   <Button
//    variant="pagination"
//    paginationDirection="prev"
//    onClick={() => handlePageClick({selected: currentPage - 1})}
//    disabled={currentPage === 0}
//    customClass={currentPage === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
//   >
//    {""}
//   </Button>
//   {/* Centered Page Numbers */}
//   <ReactPaginate
//     previousLabel={null} // Hide previous from main container
//     nextLabel={null} // Hide next from main container
//     pageCount={pageCount}
//     forcePage={currentPage}
//     onPageChange={handlePageClick}
//     pageRangeDisplayed={1}
//     marginPagesDisplayed={1}
//     breakLabel="..."
//     breakClassName="size-500 border border-beige500 rounded-100 flex items-center justify-center text-grey900"
//     containerClassName="flex items-center gap-100" // Just spacing for page numbers
//     pageClassName="size-500 cursor-pointer flex items-center justify-center text-grey900 border border-beige500 hover:text-white hover:bg-beige500 font-regular p-200 rounded-100 text-sm"
//     activeClassName="bg-grey900 text-white border-transparent"
//     disabledClassName="opacity-50 cursor-not-allowed"
//   />
//   <Button 
//    variant="pagination" 
//    paginationDirection="next"
//    onClick={() => handlePageClick({selected: currentPage + 1})}
//    disabled={currentPage === pageCount - 1}
//    customClass={currentPage === pageCount - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
//   >
//   {""}
//   </Button>
//  </div>
// );

interface ITableProps<T extends object> {
 dataList: T[];
 columns: ColumnDef<T>[];
 currentPage: number;
 setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
 itemsPerPage: number;
 additionalTableData: ReactNode;
};

export const Table =  <T extends object>({dataList, columns, currentPage, setCurrentPage, itemsPerPage, additionalTableData}: ITableProps<T>) => {
 const [data, _setData] = useState(() => [...dataList]);

 // Calculating paginated data
  const currentData = useMemo(() => {
    const startOffset = currentPage * itemsPerPage;
    return data.slice(startOffset, startOffset + itemsPerPage);
  }, [currentPage, data]);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
 };

 const table = useReactTable<T>({
   data: currentData,
   columns,
   getCoreRowModel: getCoreRowModel(),
 });

 return ( 
  <TableWrapper>
   <div className="flex flex-col md:gap-300">
    {/* Search and filters */}
    {additionalTableData}

    {/* Table */}
    <table>
     <thead>
      {table.getHeaderGroups().map(headerGroup => (
       <tr key={headerGroup.id}>
         {headerGroup.headers.map(header => (
           <th key={header.id} className="px-200 py-250 md:border-b border-b-grey100 ">
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
              className="md:px-200 py-250 border-b border-b-grey100"
             >
               {flexRender(cell.column.columnDef.cell, cell.getContext())}
             </td>
           ))}
         </tr>
       ))}
     </tbody>
    </table>
    
    {/* Pagination */}
    <PaginationDesktop 
     pageCount={pageCount}
     currentPage={currentPage}
     handlePageClick={handlePageClick}
    />
   </div>
  </TableWrapper>
 );
}