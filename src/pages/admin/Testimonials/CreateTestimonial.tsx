import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAddTestimonialMutation } from "../../../redux/features/dashboard/testimonialManagement.api";
import { TResponse } from "../../../types/global";
import { toast } from "sonner";
import axios from "axios";

const CreateTestimonial = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addTestimonial] = useAddTestimonialMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const toastId = toast.loading("Creating...");

    // Image upload
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const imageBBResponse = await axios.post(
        "https://api.imgbb.com/1/upload?key=85c1216e45edfae5e4e2980d02d293ba",
        formData
      );

      if (imageBBResponse.data.success) {
        // Extract image URL from the ImageBB response
        const imageUrl = imageBBResponse.data.data.url;

        const testimonialData = {
          name: data.name,
          image: imageUrl,
          location: data.location,
          contributionDate: data.contributionDate,
          description: data.description,
        };

        const res = (await addTestimonial(testimonialData)) as TResponse;
        if (res.error) {
          toast.error(res.error.data.message, { id: toastId });
        } else {
          toast.success("Testimonial added successfully", { id: toastId });

          reset();
        }
      } else {
        toast.error("Image upload failed", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-6">
        Add Testimonial
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="label-text">Name</span>
            <label className="input input-bordered flex items-center gap-2 mt-3">
              <input
                type="text"
                className="grow"
                placeholder="name"
                {...register("name")}
              />
            </label>
          </div>

          <div>
            <span className="label-text">Image</span>
            <label className="input input-bordered flex items-center gap-2 mt-3">
              <input
                type="file"
                className="grow"
                placeholder="Image"
                {...register("image")}
              />
            </label>
          </div>

          <div>
            <span className="label-text">Location</span> <br />
            <select
              className="select select-bordered w-full max-w-xl mt-3"
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
          </div>

          <div>
            <span className="label-text">Contribution Date</span>
            <label className="input input-bordered flex items-center gap-2 mt-3">
              <input
                type="date"
                className="grow"
                placeholder="Contribution Date"
                {...register("contributionDate")}
              />
            </label>
          </div>

          <div>
            <span className="label-text">Description</span>
            <br />
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered textarea-xs w-full max-w-xl mt-3"
              {...register("description")}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-info mt-5">
          Add Testimonial
        </button>
      </form>
    </div>
  );
};

export default CreateTestimonial;
