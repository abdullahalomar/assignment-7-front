import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetAllClothsQuery } from "../../redux/features/dashboard/clothManagement.api";
import Loader from "../../utils/Loader";
import { motion } from "framer-motion";

const WinterCloths = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { data: clothata, isLoading } = useGetAllClothsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }

  const clothSliceData = clothata?.data?.slice(0, 6);
  return (
    <div className="mb-28 lg:mx-28 md:mx-28 sm:mx-10 mx-10 mt-10 md:mt-0 sm:10">
      <h1 className="text-center text-4xl font-semibold mb-5">
        Winter clothes
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5">
        {clothSliceData?.map((cloth) => (
          <motion.div
            className="card w-78 bg-base-100 shadow-xl box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <figure className="px-10 pt-10">
              <img src={cloth.image} alt="cloth" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {cloth.title}
                <div className="badge badge-secondary">{cloth.size}</div>
              </h2>
              <p className="font-semibold">
                Category:{" "}
                <span className="text-blue-600">{cloth.category}</span>
              </p>
              <div className="card-actions mt-3">
                {currentUser ? (
                  <Link
                    to={`/winter-clothes/${cloth._id}`}
                    className="btn btn-primary btn-wide"
                  >
                    View Details
                  </Link>
                ) : (
                  <button className="btn btn-primary lg:btn-wide" disabled>
                    View Details
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {currentUser ? (
        <Link
          to="/winter-clothes"
          className="btn btn-ghost float-right mt-5 text-lg"
        >
          View All <ArrowRight />
        </Link>
      ) : null}
    </div>
  );
};

export default WinterCloths;
