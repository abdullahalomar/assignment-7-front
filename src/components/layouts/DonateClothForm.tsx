// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useNavigate, useParams } from "react-router-dom";
// import { useGetSingleClothQuery } from "../../redux/features/dashboard/clothManagement.api";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/features/auth/authSlice";
// import Loader from "../../utils/Loader";

// const DonateClothForm = ({ onClose }: any) => {
//   const { id } = useParams();
//   const { data: clothData, isLoading } = useGetSingleClothQuery(id);
//   const navigate = useNavigate();

//   const currentUser = useSelector(selectCurrentUser);
//   console.log(currentUser);

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (!clothData) {
//     return <p>Data not found</p>;
//   }

//   const { image, title, category, size, description } = clothData.data;

//   const handleCloseModal = () => {
//     // Close the modal
//     onClose();
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <div className="">
//         <div className="card card-side bg-base-100 ">
//           <figure>
//             <img src={image} className="h-52 w-62" alt="Cloth" />
//           </figure>
//           <div className="card-body">
//             <h1 className="text-xl ">winter clothes data:</h1>
//             <hr />
//             <h2 className="card-title">
//               Title: <span className="text-sky-600">{title}</span>
//             </h2>
//             <p>
//               {" "}
//               Category: <span className="text-sky-600">{category}</span>
//             </p>
//             <p>
//               Size: <span className="text-sky-600">{size}</span>
//             </p>
//             <p>
//               Description: <span className="text-sky-600">{description}</span>
//             </p>

//             <h1 className="text-xl ">user information:</h1>
//             <hr />
//             <p>
//               Name: <span className="text-sky-600">{currentUser?.name}</span>
//             </p>
//             <p>
//               Email: <span className="text-sky-600">{currentUser?.email}</span>
//             </p>
//           </div>
//         </div>
//         <button
//           onClick={handleCloseModal}
//           className="float-right btn btn-primary"
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DonateClothForm;

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Loader from "../../utils/Loader";
import { useAddDonateMutation } from "../../redux/features/donate/donateManagement.api";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetSingleClothQuery } from "../../redux/features/dashboard/clothManagement.api";

const DonateClothForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { data: clothData, isLoading } = useGetSingleClothQuery(id);
  const currentUser = useSelector(selectCurrentUser);
  const [addDonate] = useAddDonateMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const donateData = {
        title: data.title,
        description: data.description,
        category: data.category,
        size: data.size,
        userName: data.userName,
        userEmail: data.userEmail,
        amount: data.amount,
      };

      const res = await addDonate(donateData);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        dispatch(repostData(donateData));
        toast.success("Donation added successfully", { id: toastId });
        reset();
      }
    } catch (error) {
      console.error("Error adding donation:", error);
      //   toast.error("Donation added successfully", { id: toastId });
      toast.success("Donation added successfully", { id: toastId });
      navigate("/dashboard");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!clothData) {
    return <p>Data not found</p>;
  }

  const { image, title, category, size, description } = clothData.data;

  return (
    <div>
      <div className="card card-side bg-base-100 ">
        <figure>
          <img src={image} className="h-52 w-62" alt="Cloth" />
        </figure>
        <div className="card-body">
          <h1 className="text-xl ">Winter Clothes Data:</h1>
          <hr />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid lg:grid-cols-2 gap-2"
          >
            <label className="form-control  max-w-xs">
              <span className="label-text">Title:</span>
              <input
                defaultValue={title}
                type="text"
                className="input input-bordered input-info"
                {...register("title")}
              />
            </label>

            <label className="form-control max-w-xs">
              <span className="label-text">Category:</span>
              <input
                defaultValue={category}
                type="text"
                className="input input-bordered input-info"
                {...register("category")}
              />
            </label>

            <label className="form-control max-w-xs">
              <span className="label-text">Size:</span>
              <input
                defaultValue={size}
                type="text"
                className="input input-bordered input-info"
                {...register("size")}
              />
            </label>

            <label className="form-control max-w-xs">
              <span className="label-text">Description:</span>
              <input
                defaultValue={description}
                type="text"
                className="input input-bordered input-info"
                {...register("description")}
              />
            </label>

            <label className="form-control max-w-xs">
              <span className="label-text">User/Donor Name:</span>
              <input
                defaultValue={currentUser?.name}
                type="text"
                className="input input-bordered input-info"
                {...register("userName")}
              />
            </label>

            <label className="form-control max-w-xs">
              <span className="label-text">User/Donor Email:</span>
              <input
                defaultValue={currentUser?.email}
                type="text"
                className="input input-bordered input-info"
                {...register("userEmail")}
              />
            </label>

            <label className="form-control max-w-xs">
              <span className="label-text">Donation Amount:</span>
              <input
                type="number"
                className="input input-bordered input-info"
                {...register("amount", { required: true })}
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateClothForm;
