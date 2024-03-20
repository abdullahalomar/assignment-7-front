import { useParams } from "react-router-dom";
import { useGetSingleClothQuery } from "../../redux/features/dashboard/clothManagement.api";
import Loader from "../../utils/Loader";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import DonateClothModal from "../../components/layouts/DonateClothModal";

const SingleWinterClothesDetails = () => {
  const { id } = useParams();
  const { data: clothData, isLoading } = useGetSingleClothQuery(id);
  const [donateClothId, setDonateClothId] = useState();
  const [showDonateModal, setShowDonateModal] = useState(false);

  const onDonateModalClose = () => {
    setShowDonateModal(false);
  };

  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  if (isLoading) {
    return <Loader />;
  }

  if (!clothData) {
    return <p>Data not found</p>;
  }

  const { image, title, category, size, description } = clothData.data;

  return (
    <div className="my-20 px-60">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-[500px]" alt="Cloth" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Title: <span className="text-sky-600">{title}</span>
          </h2>
          <p>
            Category: <span className="text-sky-600">{category}</span>
          </p>
          <p>
            Size: <span className="text-sky-600">{size}</span>
          </p>
          <p>
            Description: <span className="text-sky-600">{description}</span>
          </p>
          <div className="card-actions justify-end">
            {/* modal */}

            <button
              className="btn btn-primary"
              onClick={() => {
                setShowDonateModal(true);
                setDonateClothId(cloth._id);
              }}
            >
              Donate Now
            </button>
          </div>

          {/* modal */}
        </div>
      </div>
      {showDonateModal && (
        <DonateClothModal
          onClose={onDonateModalClose}
          clothId={donateClothId}
        />
      )}
    </div>
  );
};

export default SingleWinterClothesDetails;
