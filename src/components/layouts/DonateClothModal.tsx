import { X } from "lucide-react";
import DonateClothForm from "./DonateClothForm";

/* eslint-disable @typescript-eslint/no-explicit-any */
const DonateClothModal = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg z-50 md:w-3/4 sm:w-11/12 w-5/6">
        <div className="absolute top-3 right-3">
          <X
            onClick={onClose}
            width={24}
            height={24}
            className="text-black hover:text-white hover:bg-slate-400 rounded-full cursor-pointer"
          />
        </div>
        <div className="max-h-96 overflow-auto">
          <DonateClothForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default DonateClothModal;
