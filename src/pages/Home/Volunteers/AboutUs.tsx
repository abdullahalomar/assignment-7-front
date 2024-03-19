import { Trash } from "lucide-react";
import {
  useDeleteVolunteerMutation,
  useGetAllVolunteersQuery,
} from "../../../redux/features/volunteer/volunteerManagement.api";
import Loader from "../../../utils/Loader";
import { toast } from "sonner";

const AboutUs = () => {
  const { data: volunteers, isLoading } = useGetAllVolunteersQuery(undefined);
  const [deleteVolunteer] = useDeleteVolunteerMutation();

  if (isLoading) {
    return <Loader />;
  }

  const handleDeleteVolunteer = async (volunteerId: string) => {
    const toastId = toast.loading("Deleting...");

    try {
      await deleteVolunteer(volunteerId);
      toast.success("Delete Successfully", { id: toastId, duration: 2000 });
    } catch (error) {
      console.error("Error deleting volunteer:", error);
    }
  };
  return (
    <div className="mx-28 mt-14 mb-20">
      <h1 className="text-3xl font-semibold text-center mb-5">
        Our Volunteers
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteers?.data.map((volunteer, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{volunteer.name}</td>
                <td>{volunteer.email} </td>
                <td>{volunteer.phone}</td>
                <td>{volunteer.location}</td>
                <td>
                  <button
                    onClick={() => handleDeleteVolunteer(volunteer._id)}
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
    </div>
  );
};

export default AboutUs;
