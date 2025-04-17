import { ContentHeader, TextField, Typography } from "@/components";
import { IOptionType } from "@/components/selectDropdown/types";
import { Table } from "@/components/table";
import { categoryOptions, filterOptions } from "@/constants/data";
import { TransactionProps } from "@/constants/types";
import { useData } from "@/hooks/useData";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formattedAmount } from "@/utils/formatAmount";
import { formattedDate } from "@/utils/formatDate";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { PiFunnelFill, PiMagnifyingGlass, PiSortDescendingFill } from "react-icons/pi";

interface ISearchAndFiltersProps {
	searchQuery: string;	
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
	sortOption: {value: string; label: string};
	setSortOption: React.Dispatch<React.SetStateAction<IOptionType>>;
	categoryOption: IOptionType;
	setCategoryOption: React.Dispatch<React.SetStateAction<IOptionType>>;
};

const columnsDesktop: ColumnDef<TransactionProps>[] = [
	{
	 accessorKey: "name",
	 header: "recipient / sender",
	 cell: ({ cell, row }) => {
			return (
			 <Typography 
				fontWeight="bold"
				customClass="flex items-center gap-200 capitalize"
			 >
				 <img src={row.original.avatar} alt="" className="size-500 rounded-full" />
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
			{formattedDate(info.getValue() as string, 'd MMM yyyy')}
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

const columnsMobile: ColumnDef<TransactionProps>[] =[
	{
	 id: "mobile-table",
	 cell: ({ row }) => {
			const date = row.original.date;
			const amount = row.original.amount;
			const profilePicture = row.original.avatar;
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
				 {formattedDate(date, 'd MMM yyyy')}
				</Typography>
			 </div>
			 </div>
			)
	 },
	},
];

const SearchAndFilters = ({
	searchQuery, 
	setSearchQuery, 
	sortOption, 
	setSortOption
}: ISearchAndFiltersProps) => {
 const isDesktop = useMediaQuery("(min-width: 768px)");

 return (
	<div className="flex items-center justify-between gap-300">
	 <TextField
		id="seach transaction"
		fieldname="search transaction"
		inputPlaceholder="Search transaction"
		icon={<PiMagnifyingGlass  className="size-200 text-grey900" />}
		customClass="w-[13rem] xl:w-[20rem]"
		value={searchQuery}
		onChange={e => setSearchQuery(e.target.value)}
	 />
	 <div className="flex items-center justify-around gap-300 md:w-full xl:w-auto">
		{isDesktop 
		 ? (
			<>
				<TextField
				id="filter options"
				fieldname="filter options"
				fieldType="select"
				labelText="Sort by"
				selectOptions={filterOptions}
				selectDefaultValue={sortOption}
				selectValue={sortOption}
				selectOnChange={(selected) => selected && setSortOption(selected)}
				customClass="flex-row items-center gap-100"
				labelTextFontWeight="regular"
				selectCustomClass="w-[7rem]"
			/>
			<TextField
				id="category options"
				fieldname="category options"
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
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOption, setSortOption] = useState<IOptionType>(filterOptions[0]);
	const [categoryOption, setCategoryOption] = useState<IOptionType>(categoryOptions[0]);
 const {transactions} = useData();
 const itemsPerPage = 10; 
 const isDesktop = useMediaQuery("(min-width: 768px)");

	const filteredTransactions = useMemo(() => {
		let updatedTransactions = [...transactions];

		//if there is a search query, filter the transactions
		if (searchQuery.trim()) {
			updatedTransactions = updatedTransactions.filter(transaction =>
				transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		//I'm sorting the transactions regardless of whether I have a search query or not
		updatedTransactions.sort((a, b) => {
				switch(sortOption.value) {
					case "latest": 
						return new	Date(b.date).getTime() - new Date(a.date).getTime();
					case "oldest":
						return new Date(a.date).getTime() - new Date(b.date).getTime();
					case "a to z": 
						return a.name.localeCompare(b.name);
					case "z to a":
						return b.name.localeCompare(a.name);
					case "highest":
						return b.amount - a.amount;
					case	"lowest":
						return a.amount - b.amount;
					default:
						return 0;
				}
			});

			return updatedTransactions;
	}, [transactions, searchQuery, sortOption]);

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
		<Table<TransactionProps>
		 dataList={filteredTransactions}
		 columns={columns}
		 currentPage={currentPage}
		 setCurrentPage={setCurrentPage}
		 itemsPerPage={itemsPerPage}
		 additionalTableData={
				<SearchAndFilters 
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						sortOption={sortOption}
						setSortOption={setSortOption}
						categoryOption={categoryOption}
						setCategoryOption={setCategoryOption}
				/>
			}
		/>
	 </section>
	</div>
 );
}