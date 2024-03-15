import {
  useAddClothMutation,
  useGetAllClothsQuery,
} from "../../redux/features/dashboard/clothManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../types/global";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const CreateWinterCloth = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addCloth] = useAddClothMutation();
  const { refetch } = useGetAllClothsQuery(undefined);

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

        const clothData = {
          title: data.title,
          description: data.description,
          image: imageUrl,
          category: data.category,
          size: data.size,
        };

        const res = (await addCloth(clothData)) as TResponse;
        if (res.error) {
          toast.error(res.error.data.message, { id: toastId });
        } else {
          toast.success("Cloth added successfully", { id: toastId });
          refetch();
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
        Add Winter Cloth
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="label-text">Title</span>
            <label className="input input-bordered flex items-center gap-2 mt-3">
              <input
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
              className="select select-bordered w-full max-w-xs mt-3"
              {...register("size")}
            >
              <option selected>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-info mt-5">
          Add Cloth
        </button>
      </form>
    </div>
  );
};

export default CreateWinterCloth;
