import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Button } from "../button";
import { ContentHeader } from "../contentHeader";
import { CardWrapper } from "./CardWrapper";
import { Typography } from "../typography";
import { formattedAmount } from "@/utils/formatAmount";
import { useRef, useState } from "react";
import { DeleteModal } from "../modal";

interface IPotsCardProps {
 title: string;
 itemColor: string;
 totalSaved: number;
 targetAmount: number;
 handleOpenModal: (type: string) => void;
};

export const PotsCard = ({title, itemColor, totalSaved, targetAmount, handleOpenModal}: IPotsCardProps) => {
  const [openMoreOptions, setOpenMoreOptions] = useState<boolean>(false);
  const deleteModalRef = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formattedTotalSaved = formattedAmount(totalSaved);
  const formattedTargetAmount = formattedAmount(targetAmount);
  const progressPercentage = ((totalSaved / targetAmount) * 100);

  const handleOpenDeleteModal = () => {
    setIsModalOpen(true);
    setOpenMoreOptions(false);
  };

  const handleCloseDeleteModal = () => {
    setIsModalOpen(false);
  };

  const toggleMoreOptions = () => {
    setOpenMoreOptions(prevState => !prevState);
  };

  const handleEditPot = () => {
    handleOpenModal("edit");
    setOpenMoreOptions(false);
  };

  const handleDeleteAction = () => {
    console.log(`Deleted ${title}`);
    handleCloseDeleteModal();
  };

 return ( 
  <CardWrapper>
   <div className="flex flex-col justify-center gap-400 relative">
    <ContentHeader
      as="h2"
      fontWeight="bold"
      title={title}
      coloredDot={itemColor}
      buttonGroup={
       <Button 
        className="outline-none text-grey300 cursor-pointer"
        onClick={toggleMoreOptions}
       >
        <PiDotsThreeOutlineFill className="size-200" />
       </Button>
      } 
     /> 
     {/* Pots chart and bar */}
     <div className="flex flex-col gap-200 capitalize">
      <div className="flex items-center justify-between">
       <Typography 
        color="grey500"
       >
        total saved
       </Typography>
       <Typography 
        fontWeight="bold" 
        customClass="text-xl"
       >
        {formattedTotalSaved}
       </Typography>
      </div>
      {/* Progress bar */}
      <div className="border border-transparent rounded-50 bg-beige100">
       <div className=" rounded-50 h-100" 
        style={{
         background: itemColor, 
         width: `${progressPercentage}%`
        }}
       >
       </div>
      </div>
      {/* Progress bar info */}
      <div className="flex items-center justify-between">
       <Typography
        as="span"
        color="grey500"
        fontWeight="bold"
       >
        {progressPercentage.toFixed(1)}%
       </Typography>
       <Typography
        as="span"
        color="grey500"
       >
        target of {formattedTargetAmount}
       </Typography>
      </div>
     </div>

      {/* Button groups */}
      <div className="grid grid-cols-2 gap-200">
      <Button variant="secondary">+ Add Money</Button>
      <Button variant="secondary">Withdraw</Button>
      </div>

      {/* More options */}
      {openMoreOptions && (
        <ul className="absolute right-1 top-8 px-250 py-150 bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.25)] flex flex-col justify-between gap-150 rounded-100 max-h-[18.75rem] z-50">
          <li 
            className="cursor-pointer"
            onClick={handleEditPot}
          >
            <Typography>Edit Pot</Typography>
          </li>
          <hr className="text-grey100" />
          <li 
            className="cursor-pointer"
            onClick={handleOpenDeleteModal}
          >
            <Typography color="red">Delete Pot</Typography>
          </li>
        </ul>
      )}

      {isModalOpen && (
        <DeleteModal
          ref={deleteModalRef}
          title={`delete '${title}'`} 
          subText="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
          onClose={handleCloseDeleteModal}
          onConfirm={handleDeleteAction}
          isOpen={isModalOpen}
        />
      )}
   </div>
  
  
  </CardWrapper>
 );
}