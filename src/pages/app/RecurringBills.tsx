import { BillsSummaryList, ContentHeader, SummaryCard, TextField, Typography } from "@/components";
import { Table } from "@/components/table";
import { filterOptions } from "@/constants/data";
import { TransactionProps } from "@/constants/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formattedAmount } from "@/utils/formatAmount";
import { formattedDate } from "@/utils/formatDate";
import { getRecurringBills } from "@/utils/getRecurringBills";
import { ColumnDef } from "@tanstack/react-table";
import React, { useMemo } from "react";
import { PiCheckCircleFill, PiMagnifyingGlass, PiReceiptLight, PiSortDescendingFill, PiWarningCircleFill } from "react-icons/pi";

const columnsDesktop : ColumnDef<TransactionProps>[] = [
 {
	accessorKey: "name",
	header: "bill title",
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
	accessorKey: "date",
	header: "due date",
	cell: ({cell, row}) => {
		const isUpcoming = row.original.status === "paid";
		const isDueSoon = row.original.status === "dueSoon";  

		return(
			<Typography
			as="span"
			color={isUpcoming ? "green" : "grey500"}
			customClass="capitalize flex items-center gap-100"
		>
			{`Monthly - ${formattedDate(cell.getValue() as string, "do")}`}
			{isUpcoming && <PiCheckCircleFill className="size-200" />}
			{isDueSoon && <PiWarningCircleFill className="size-200 text-red" />}
		</Typography>
	 )}
 },
 {
	accessorKey: "amount",
	header: () => 
	 <Typography 
		as="span" 
		color={"grey500"} 
		customClass="block text-right"
	 >
		amount
	 </Typography>,
	cell: ({cell, row}) => {
	 const infoValue = formattedAmount(cell.getValue() as number);
	 return (
		 <Typography
			fontWeight="bold"
			customClass="text-right"
			color={
				row.original.status === "dueSoon" 
					? "red" 
					: "grey900"
			}
		 >
		 {infoValue.replace("-", "")}
		</Typography>)}  
 }
];

const columnsMobile: ColumnDef<TransactionProps>[] =[
	{
	 id: "mobile-table",
	 cell: ({ row }) => {
			const date = row.original.date;
			const amount = row.original.amount;
			const profilePicture = row.original.avatar;
			return (
			 <div className="flex flex-col gap-100">
				<div className="flex items-center gap-200">
				 <img src={profilePicture} alt="" className="size-500 rounded-full" />
				 <Typography 
					fontWeight="bold"
					customClass="flex items-center gap-200 capitalize"
				 >
					 {row.original.name}
				 </Typography>
				</div>

				<div className="flex items-center justify-between">
				 <Typography
					as="span"
					color="grey500"
				 >
					{date}
				 </Typography>
				 <Typography
					fontWeight="bold"
				 >
					{formattedAmount(amount)}
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
		id="transaction search"
		fieldname="transaction search"
		inputPlaceholder="Search transaction"
		icon={<PiMagnifyingGlass  className="size-200 text-grey900" />}
		customClass="w-[17rem] md:w-[20rem]"
	/>
	{isDesktop 
	 ? (
		 <TextField
		 id="select"
		 fieldname="select"
		 fieldType="select"
		 labelText="Sort by"
		 selectOptions={filterOptions}
		 selectDefaultValue={filterOptions[0]}
		 customClass="flex-row items-center gap-100"
		 labelTextFontWeight="regular"
		 selectCustomClass="w-[7rem]"
		/>)
	 : (<PiSortDescendingFill className="size-250 text-grey900 cursor-pointer" />)
	}
 </div>
)};

export const RecurringBills = ({}) => {
	const { 
		recurringTransactions, 
		totalPaidBills, 
		totalDueSoon, 
		totalUpcomingBills, 
		paidBills,
		dueSoon,
		upcomingBills
	} = getRecurringBills();
 	const isDesktop = useMediaQuery("(min-width: 768px)");
	const overallBills = recurringTransactions.reduce((sum, item) => sum + item.amount, 0);

	const recurringBillsSummary = [
		{ id: 1, title: "paid bills", amount: totalPaidBills, noOfTransations: paidBills.length + 1 },
		{ id: 2, title: "total upcoming", amount: totalUpcomingBills, noOfTransations: upcomingBills.length + 1},
		{ id: 3, title: "due soon", amount: totalDueSoon, noOfTransations: dueSoon.length + 1},
	];

 const columns = useMemo(() => 
	 isDesktop 
		? columnsDesktop 
		: columnsMobile
 , [isDesktop]);

 return ( 
	<div className="flex flex-col gap-400">
	 <header>
		<ContentHeader
		 title="recurring bills" 
		 as="h1"
		 fontWeight="bold"
		/>
	 </header>

	 <section className="grid grid-cols-1 xl:grid-cols-6 gap-300">
		<div className="xl:col-span-2 flex flex-col gap-300 md:grid md:grid-cols-2 xl:flex xl:flex-col ">
		 <SummaryCard
			variant="primary" 
			title="total bills"
			content={formattedAmount(overallBills).replace("-", "")}
			icon={<PiReceiptLight className="size-500" />}
			customClass=" items-center md:items-start md:flex-col md:justify-center md:h-full xl:h-auto"
		 />
		 <article className="bg-white rounded-150 p-250 flex flex-col justify-center gap-250">
			<ContentHeader 
			 title="summary"
			 as="h4"
			 fontWeight="bold"
			/>

			<ul className="flex flex-col justify-center gap-200">
			 {recurringBillsSummary.map((item, index) => (
				<React.Fragment key={item.id}>
				 <BillsSummaryList
					title={item.title} 
					totalAmount={item.amount}
					noOfTransactions={String(item.noOfTransations)}
				 />
				 {index !== recurringBillsSummary.length - 1 && 
					<hr className="text-grey500 opacity-15"/> 
				 }
				</React.Fragment>
			 ))}
			</ul>

		 </article>
		</div>

		{/* Recurring bills table */}
		<div className="xl:col-span-4">
		 <Table<TransactionProps>
			dataList={recurringTransactions}
			columns={columns}
			additionalTableData={<SearchAndFilters />}
			enablePagination={false}
		 />
		</div>
		
	 </section>
	</div>
 );
}