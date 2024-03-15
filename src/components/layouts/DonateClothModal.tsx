import { X } from "lucide-react";
import DonateClothForm from "./DonateClothForm";

/* eslint-disable @typescript-eslint/no-explicit-any */
const DonateClothModal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg z-50 md:mx-20 sm:mx-10 mx-10">
        <X
          onClick={onClose}
          width={24}
          height={24}
          className="text-black hover:text-white hover:bg-slate-400 rounded-full absolute top-2 right-3 cursor-pointer"
        />

        <DonateClothForm onClose={onClose} />
      </div>
    </div>
  );
};

export default DonateClothModal;
