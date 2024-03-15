/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleClothQuery } from "../../redux/features/dashboard/clothManagement.api";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import Loader from "../../utils/Loader";

const DonateClothForm = ({ onClose }: any) => {
  const { id } = useParams();
  const { data: clothData, isLoading } = useGetSingleClothQuery(id);
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  if (isLoading) {
    return <Loader />;
  }

  if (!clothData) {
    return <p>Data not found</p>;
  }

  const { image, title, category, size, description } = clothData.data;

  const handleCloseModal = () => {
    // Close the modal
    onClose();
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="">
        <div className="card card-side bg-base-100 ">
          <figure>
            <img src={image} className="h-52 w-62" alt="Cloth" />
          </figure>
          <div className="card-body">
            <h1 className="text-xl ">winter clothes data:</h1>
            <hr />
            <h2 className="card-title">
              Title: <span className="text-sky-600">{title}</span>
            </h2>
            <p>
              {" "}
              Category: <span className="text-sky-600">{category}</span>
            </p>
            <p>
              Size: <span className="text-sky-600">{size}</span>
            </p>
            <p>
              Description: <span className="text-sky-600">{description}</span>
            </p>

            <h1 className="text-xl ">user information:</h1>
            <hr />
            {/* <p>
              Name:{" "}
              <span className="text-sky-600">
                {userData?.data?.email && currentUser?.user?.email
                  ? userData?.data?.name
                  : ""}
              </span>
            </p> */}
            <p>
              Email:{" "}
              <span className="text-sky-600">{currentUser?.user?.email}</span>
            </p>
          </div>
        </div>
        <button
          onClick={handleCloseModal}
          className="float-right btn btn-primary"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DonateClothForm;
