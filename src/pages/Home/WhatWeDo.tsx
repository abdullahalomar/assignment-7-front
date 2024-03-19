import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <div className="px-28 mb-28">
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
          {/* one */}
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: 1,
              repeatType: "reverse",
              duration: 2,
            }}
            className="collapse bg-base-200"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-600 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">Accessibility</p>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-500 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">
                We strive to make winter clothes easily accessible to
                underserved populations such as the homeless, low-income
                families, and refugees.
              </p>
            </div>
          </motion.div>
          {/* two */}
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: 1,
              repeatType: "mirror",
              duration: 2,
            }}
            className="collapse bg-base-200 mt-3"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-600 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">Efficiency: </p>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-500 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">
                Our platform optimizes distribution logistics, inventory
                tracking, and volunteer coordination to ensure prompt and
                effective delivery of donated clothing.
              </p>
            </div>
          </motion.div>
          {/* three */}
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: 1,
              repeatType: "reverse",
              duration: 2,
            }}
            className="collapse bg-base-200 mt-3"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-600 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">Equity: </p>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-500 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">
                We prioritize marginalized communities, allocating resources
                based on need and addressing disparities in access to warm
                clothing.
              </p>
            </div>
          </motion.div>
          {/* four */}
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: 1,
              repeatType: "mirror",
              duration: 2,
            }}
            className="collapse bg-base-200 mt-3"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-600 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">Community Engagement:</p>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-500 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">
                We mobilize individuals, businesses, and organizations to
                contribute to winter clothes drives and volunteer initiatives,
                amplifying our impact and fostering resilience.
              </p>
            </div>
          </motion.div>
          {/* five */}
          <motion.div
            animate={{ x: 100 }}
            transition={{
              repeat: 1,
              repeatType: "reverse",
              duration: 2,
            }}
            className="collapse bg-base-200 mt-3"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-600 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">Sustainability:</p>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-gradient-to-r from-blue-500 to-cyan-500  peer-checked:text-secondary-content">
              <p className="text-xl text-white">
                Promoting reuse, recycling, and responsible disposal practices,
                we minimize waste and environmental impact while maximizing
                clothing longevity.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ scale: [0, 1, 0.5, 1] }}
          transition={{ times: [0.8, 0.5, 0.9, 1] }}
        >
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
              <div className="timeline-end timeline-box  hover:bg-sky-400 hover:text-white">
                Protecting vulnerable individuals from cold weather-related
                health risks like hypothermia and frostbite
              </div>
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
              <div className="timeline-end timeline-box hover:bg-sky-400 hover:text-white">
                Promoting comfort and confidence among recipients, enhancing
                their dignity and well-being during harsh conditions.
              </div>
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
              <div className="timeline-end timeline-box hover:bg-sky-400 hover:text-white">
                Fostering solidarity and mutual support, strengthening social
                cohesion within local communities.
              </div>
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
              <div className="timeline-end timeline-box hover:bg-sky-400 hover:text-white">
                Contributing to sustainable fashion practices, reducing
                environmental impact and promoting ethical consumption.
              </div>
              <hr />
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
