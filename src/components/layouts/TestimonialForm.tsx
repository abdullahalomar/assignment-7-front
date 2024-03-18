/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useUpdateTestimonialMutation } from "../../redux/features/dashboard/testimonialManagement.api";
import { toast } from "sonner";
import axios from "axios";

const TestimonialForm = ({ onClose, testimonial, isUpdate }: any) => {
  const { register, handleSubmit, reset } = useForm();
  const [updateTestimonial] = useUpdateTestimonialMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    const toastId = toast.loading("Updating...");

    // Check if image is updated
    let imageUrl = testimonial?.image; // Default to existing image URL

    if (data.image && data.image.length > 0) {
      // If a new image is uploaded, update it using ImageBB
      const formData = new FormData();
      formData.append("image", data.image[0]);

      try {
        const imageBBResponse = await axios.post(
          "https://api.imgbb.com/1/upload?key=85c1216e45edfae5e4e2980d02d293ba",
          formData
        );

        if (imageBBResponse.data.success) {
          // Extract image URL from the ImageBB response
          imageUrl = imageBBResponse.data.data.url;
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        toast.error("Failed to upload image", { id: toastId });
        return;
      }
    }

    const testimonialData = {
      name: data?.name,
      image: imageUrl,
      location: data?.location,
      contributionDate: data?.contributionDate,
      description: data?.description,
    };

    if (isUpdate) {
      try {
        // Update cloth data
        await updateTestimonial({
          testimonialId: testimonial?._id,
          data: testimonialData,
        });

        toast.success("Testimonial updated successfully", { id: toastId });
      } catch (error) {
        toast.error("Failed to update Testimonial", { id: toastId });
      }
    } else {
      toast.error("Data not updated", { id: toastId });
    }

    reset();
    onClose();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-12">
          <div>
            <span className="label-text">Name</span>
            <label className="input input-bordered flex items-center gap-2 mt-3">
              <input
                defaultValue={testimonial?.name}
                type="text"
                className="grow"
                placeholder="Name"
                {...register("name")}
              />
            </label>
          </div>

          <div>
            <span className="label-text">Description</span>
            <br />
            <textarea
              defaultValue={testimonial?.description}
              placeholder="Description"
              className="textarea textarea-bordered textarea-xs w-full max-w-xs mt-3"
              {...register("description")}
            ></textarea>
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
              defaultValue={testimonial?.location}
              className="select select-bordered w-full max-w-xs mt-3"
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
        </div>
        <button type="submit" className="btn btn-info mt-5 ms-12">
          Update
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
