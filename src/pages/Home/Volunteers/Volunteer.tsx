import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddVolunteerMutation } from "../../../redux/features/volunteer/volunteerManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const Volunteer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addVolunteer] = useAddVolunteerMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const volunteerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
      };

      const res = (await addVolunteer(volunteerData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Volunteer added successfully", { id: toastId });

        reset();
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <div className="mx-10 sm:mx-20 md:mx-28 lg:mx-28 pt-14 pb-20">
        <h1 className="text-2xl font-semibold text-center pb-8">
          Add Volunteer
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-5"
        >
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-info w-full text-black"
                {...register("name")}
              />
            </div>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-info w-full text-black"
                {...register("email")}
              />
            </div>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered input-info w-full text-black"
                {...register("phone")}
              />
            </div>
          </label>
          <label className="form-control w-full max-w-xl text-black">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <select
              className="select select-bordered select-info text-black"
              {...register("location")}
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Barishal">Barishal</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Jessore">Jessore</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Comilla">Comilla</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Tangail">Tangail</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary w-full max-w-xl">
            Add Volunteer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
