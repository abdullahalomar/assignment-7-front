import first from "../../assets/images/hero-image/first.jpg";
import second from "../../assets/images/hero-image/second.jpg";
import third from "../../assets/images/hero-image/third.jpg";
import forth from "../../assets/images/hero-image/forth.jpg";
import fifth from "../../assets/images/hero-image/fifth.jpg";
import seventh from "../../assets/images/hero-image/seventh.jpg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 relative">
        {/* <h1 className="absolute top-5 sm:top-5 md:top-7 lg:top-10  text-4xl font-bold">
          Our Mission:
        </h1> */}
        <div className="hero-content flex-col lg:flex-row mt-16 sm:mt-16 md:mt-20 lg:mt-0">
          <div className="lg:text-left">
            <h1 className="text-3xl font-semibold mb-5 text-center">Goals:</h1>
            {/* timeline */}

            <ul className="timeline timeline-vertical">
              <li>
                {darkMode ? (
                  <div className="timeline-start timeline-box text-black bg-white shadow-xl">
                    Provide winter clothes to those in need.
                  </div>
                ) : (
                  <div
                    data-aos="fade-right"
                    className="timeline-start timeline-box shadow-xl"
                  >
                    Provide winter clothes to those in need.
                  </div>
                )}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {darkMode ? (
                  <div className="timeline-end timeline-box text-black bg-white shadow-xl">
                    Engage communities through volunteerism and partnerships.
                  </div>
                ) : (
                  <div
                    data-aos="fade-left"
                    className="timeline-end timeline-box shadow-xl"
                  >
                    Engage communities through volunteerism and partnerships.
                  </div>
                )}
                <hr className="bg-primary" />
              </li>
              <li>
                {darkMode ? (
                  <div className="timeline-start timeline-box text-black bg-white shadow-xl">
                    Ensure accessibility and inclusivity for all recipients.
                  </div>
                ) : (
                  <div
                    data-aos="fade-right"
                    className="timeline-start timeline-box shadow-xl"
                  >
                    Ensure accessibility and inclusivity for all recipients.
                  </div>
                )}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {darkMode ? (
                  <div className="timeline-end timeline-box text-black bg-white shadow-xl">
                    Promote sustainability in clothing practices.
                  </div>
                ) : (
                  <div
                    data-aos="fade-left"
                    className="timeline-end timeline-box shadow-xl"
                  >
                    Promote sustainability in clothing practices.
                  </div>
                )}
                <hr className="bg-primary" />
              </li>
              <li>
                {darkMode ? (
                  <div className="timeline-start timeline-box text-black bg-white shadow-xl">
                    Empower communities with winter safety education.
                  </div>
                ) : (
                  <div
                    data-aos="fade-right"
                    className="timeline-start timeline-box shadow-xl"
                  >
                    Empower communities with winter safety education.
                  </div>
                )}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
            {/* timeline */}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
              scale: {
                type: "spring",
              },
            }}
            className="grid grid-cols-3 grid-row-3 gap-5"
          >
            <div className="row-span-2">
              <img className="w-40 h-full" src={seventh} alt="" />
            </div>
            <div className="col-span-2">
              <img className="w-full h-32" src={second} />
            </div>
            <div className="">
              <img className="w-40 h-32" src={third} />
            </div>
            <div className="row-span-2">
              <img className="w-40 h-full" src={forth} />
            </div>
            <div className="">
              <img className="w-40 h-32" src={first} />
            </div>
            <div className="">
              <img className="w-40 h-32" src={fifth} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
