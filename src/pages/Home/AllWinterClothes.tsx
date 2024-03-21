/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import { useGetAllClothsQuery } from "../../redux/features/dashboard/clothManagement.api";
import Loader from "../../utils/Loader";

const AllWinterClothes = () => {
  const { data: clothData, isLoading } = useGetAllClothsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  const allClothesData = clothData?.data?.slice(0, 12);
  return (
    <div className="py-20">
      <div className="flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-wrap gap-10 md:mx-3 mx-4 justify-center">
        {allClothesData?.map((cloth) => (
          <div
            key={cloth._id}
            className="card w-96 bg-base-100 shadow-xl"
            data-aos="zoom-in-right"
          >
            <figure className="px-10 pt-10">
              <img src={cloth.image} alt="cloth" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <span className="text-black">{cloth.title}</span>
                <div className="badge badge-secondary">{cloth.size}</div>
              </h2>
              <p className="font-semibold text-black">
                Category:{" "}
                <span className="text-blue-600">{cloth.category}</span>
              </p>
              <div className="card-actions mt-3">
                <Link
                  to={`/winter-clothes/${cloth._id}`}
                  className="btn btn-primary btn-wide"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWinterClothes;
