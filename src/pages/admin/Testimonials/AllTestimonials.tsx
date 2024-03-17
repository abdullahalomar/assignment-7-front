import { FilePenLine, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useDeleteTestimonialMutation,
  useGetAllTestimonialsQuery,
} from "../../../redux/features/dashboard/testimonialManagement.api";
import Loader from "../../../utils/Loader";
import { toast } from "sonner";
import { useState } from "react";
import UpdateTestimonialModal from "../../../components/layouts/UpdateTestimonialModal";

const AllTestimonials = () => {
  const { data: testimonialData, isLoading } =
    useGetAllTestimonialsQuery(undefined);
  const [deleteTestimonialMutation] = useDeleteTestimonialMutation();
  const [editTestimonialId, setEditTestimonialId] = useState();
  const [showTestimonialModal, setShowTestimonialModal] = useState(false);

  const onUpdateModalClose = () => {
    setShowTestimonialModal(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleDeleteTestimonial = async (testimonialId: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteTestimonialMutation(testimonialId);
      toast.success("Delete Successfully", { id: toastId, duration: 2000 });
    } catch (error) {
      console.error("Error deleting Testimonial:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-6">
        All Testimonials
      </h1>
      <Link
        to="/dashboard/create-testimonial"
        className="btn btn-outline btn-wide btn-primary ms-10 mb-5"
      >
        Add Testimonial
      </Link>
      <div className="overflow-x-auto mx-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Contribution Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {testimonialData?.data.map((testimonial, index) => (
              <tr key={testimonial._id}>
                <th>{index + 1}</th>
                <td>{testimonial.name}</td>
                <td>{testimonial.location}</td>
                <td>{testimonial.contributionDate}</td>
                <td>{testimonial.description}</td>
                <td className="">
                  {/* edit */}
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    onClick={() => {
                      setShowTestimonialModal(true);
                      setEditTestimonialId(testimonial._id);
                    }}
                    className="btn btn-warning me-4"
                  >
                    <FilePenLine />
                  </button>

                  {/* delete */}
                  <button
                    onClick={() => handleDeleteTestimonial(testimonial._id)}
                    className="btn btn-error"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showTestimonialModal && (
        <UpdateTestimonialModal
          onClose={onUpdateModalClose}
          testimonialId={editTestimonialId}
          isUpdate={true}
        />
      )}
    </div>
  );
};

export default AllTestimonials;
