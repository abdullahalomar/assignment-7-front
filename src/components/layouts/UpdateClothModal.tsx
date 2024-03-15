/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "lucide-react";
import WinterClothForm from "./WinterClothForm";
import { useGetSingleClothQuery } from "../../redux/features/dashboard/clothManagement.api";
import Loader from "../../utils/Loader";

const UpdateClothModal = ({ onClose, clothId, isUpdate }: any) => {
  const { data, isLoading } = useGetSingleClothQuery(clothId);

  console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg z-50 md:mx-20 sm:mx-10 mx-10">
        <X
          onClick={onClose}
          width={24}
          height={24}
          className="text-red-600 absolute top-2 right-3 cursor-pointer"
        />
        <WinterClothForm
          cloth={data?.data}
          onClose={onClose}
          isUpdate={isUpdate}
        />
      </div>
    </div>
  );
};

export default UpdateClothModal;
