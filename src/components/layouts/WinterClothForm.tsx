/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useUpdateClothMutation } from "../../redux/features/dashboard/clothManagement.api";
import { toast } from "sonner";
import axios from "axios";

const WinterClothForm = ({ onClose, cloth, isUpdate }: any) => {
  const { register, handleSubmit, reset } = useForm();
  const [updateCloth] = useUpdateClothMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    const toastId = toast.loading("Creating...");

    // Check if image is updated
    let imageUrl = cloth?.image; // Default to existing image URL

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

    const clothData = {
      title: data.title,
      description: data.description,
      image: imageUrl,
      category: data.category,
      size: data.size,
    };

    if (isUpdate) {
      try {
        // Update cloth data
        await updateCloth({
          clothId: cloth?._id,
          data: clothData,
        });

        toast.success("Cloth updated successfully", { id: toastId });
      } catch (error) {
        toast.error("Failed to update cloth", { id: toastId });
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
            <span className="label-text">Title</span>
            <label className="input input-bordered flex items-center gap-2 mt-3">
              <input
                defaultValue={cloth?.title}
                type="text"
                className="grow"
                placeholder="Title"
                {...register("title")}
              />
            </label>
          </div>

          <div>
            <span className="label-text">Description</span>
            <br />
            <textarea
              defaultValue={cloth?.description}
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
            <span className="label-text">Category</span> <br />
            <select
              defaultValue={cloth?.category}
              className="select select-bordered w-full max-w-xs mt-3"
              {...register("category")}
            >
              <option selected>Man</option>
              <option>Woman</option>
              <option>Kids</option>
            </select>
          </div>

          <div>
            <span className="label-text">Size</span> <br />
            <select
              defaultValue={cloth?.size}
              className="select select-bordered w-full max-w-xs mt-3"
              {...register("size")}
            >
              <option selected>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-info mt-5 ms-12">
          Update
        </button>
      </form>
    </div>
  );
};

export default WinterClothForm;
