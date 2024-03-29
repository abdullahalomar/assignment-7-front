/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "lucide-react";
import TestimonialForm from "./TestimonialForm";
import { useGetSingleTestimonialQuery } from "../../redux/features/dashboard/testimonialManagement.api";
import Loader from "../../utils/Loader";

const UpdateTestimonialModal = ({ onClose, testimonialId, isUpdate }: any) => {
  const { data, isLoading } = useGetSingleTestimonialQuery(testimonialId);

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
          className="text-black hover:text-white hover:bg-slate-500 rounded-full absolute  absolute top-2 right-3 cursor-pointer"
        />
        <TestimonialForm
          testimonial={data?.data}
          onClose={onClose}
          isUpdate={isUpdate}
        />
      </div>
    </div>
  );
};

export default UpdateTestimonialModal;
