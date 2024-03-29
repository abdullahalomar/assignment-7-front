import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const WhatWeDo = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className="px-10 sm:px-20 md:px-28 lg:px-28 mb-28">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-5">What We Do</h1>
        <h1 className="text-2xl font-semibold mb-5 text-slate-600">Mission</h1>
        <p className="text-xl text-slate-700">
          Our platform is committed to ensuring that individuals and communities
          facing cold weather conditions have access to warm clothing
          essentials. We aim to streamline winter clothes distribution
          management, making it efficient and equitable through technology and
          community engagement.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap justify-between items-center">
        <div className="lg:mb-0 md:mb-10 sm:mb-10 mb-10">
          <div className="join join-vertical w-full">
            <motion.div
              animate={{ x: 100 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 2,
              }}
              className="collapse collapse-arrow join-item border border-sky-300"
            >
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                Accessibility
              </div>
              <div className="collapse-content">
                <p>
                  We strive to make winter clothes easily accessible to
                  underserved populations such as the homeless, low-income
                  families, and refugees.
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 100 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 2,
              }}
              className="collapse collapse-arrow join-item border border-sky-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                Efficiency
              </div>
              <div className="collapse-content">
                <p>
                  Our platform optimizes distribution logistics, inventory
                  tracking, and volunteer coordination to ensure prompt and
                  effective delivery of donated clothing.
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 100 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 2,
              }}
              className="collapse collapse-arrow join-item border border-sky-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                Equity
              </div>
              <div className="collapse-content">
                <p>
                  We prioritize marginalized communities, allocating resources
                  based on need and addressing disparities in access to warm
                  clothing.
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 100 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 2,
              }}
              className="collapse collapse-arrow join-item border border-sky-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                Community Engagement
              </div>
              <div className="collapse-content">
                <p>
                  We mobilize individuals, businesses, and organizations to
                  contribute to winter clothes drives and volunteer initiatives,
                  amplifying our impact and fostering resilience.
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={{ x: 100 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 2,
              }}
              className="collapse collapse-arrow join-item border border-sky-300"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500">
                Sustainability
              </div>
              <div className="collapse-content">
                <p>
                  Promoting reuse, recycling, and responsible disposal
                  practices, we minimize waste and environmental impact while
                  maximizing clothing longevity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start  font-semibold">
                Humanitarian Relief
              </div>
              <div className="timeline-middle text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {darkMode ? (
                <div className="timeline-end timeline-box bg-sky-400 hover:bg-white hover:text-black">
                  Protecting vulnerable individuals from cold weather-related
                  health risks like hypothermia and frostbite
                </div>
              ) : (
                <div
                  data-aos="flip-up"
                  className="timeline-end timeline-box  hover:bg-sky-400 hover:text-white"
                >
                  Protecting vulnerable individuals from cold weather-related
                  health risks like hypothermia and frostbite
                </div>
              )}
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-semibold">
                Dignity and Well-being
              </div>
              <div className="timeline-middle text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {darkMode ? (
                <div className="timeline-end timeline-box bg-sky-400 hover:bg-white hover:text-black">
                  Promoting comfort and confidence among recipients, enhancing
                  their dignity and well-being during harsh conditions.
                </div>
              ) : (
                <div
                  data-aos="flip-down"
                  className="timeline-end timeline-box hover:bg-sky-400 hover:text-white"
                >
                  Promoting comfort and confidence among recipients, enhancing
                  their dignity and well-being during harsh conditions.
                </div>
              )}
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-semibold">
                Community Empowerment
              </div>
              <div className="timeline-middle text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {darkMode ? (
                <div className="timeline-end timeline-box bg-sky-400 hover:bg-white hover:text-black">
                  Fostering solidarity and mutual support, strengthening social
                  cohesion within local communities.
                </div>
              ) : (
                <div
                  data-aos="flip-up"
                  className="timeline-end timeline-box hover:bg-sky-400 hover:text-white"
                >
                  Fostering solidarity and mutual support, strengthening social
                  cohesion within local communities.
                </div>
              )}
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start font-semibold">
                Long-term Sustainability
              </div>
              <div className="timeline-middle text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {darkMode ? (
                <div className="timeline-end timeline-box bg-sky-400 hover:bg-white hover:text-black ">
                  Contributing to sustainable fashion practices, reducing
                  environmental impact and promoting ethical consumption.
                </div>
              ) : (
                <div
                  data-aos="flip-down"
                  className="timeline-end timeline-box hover:bg-sky-400 hover:text-white"
                >
                  Contributing to sustainable fashion practices, reducing
                  environmental impact and promoting ethical consumption.
                </div>
              )}
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
