import winter from "../../assets/images/cold.jpg";
import { motion } from "framer-motion";

const WeatherSafetyTips = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${winter})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white">
              cold weather safety tips
            </h1>

            <ul className="steps text-white">
              <li className="step step-info">Layer Clothing</li>
              <li className="step step-info">Protect Extremities</li>
              <li className="step step-info">Stay Dry</li>
              <li className="step step-info">Prepare Your Home</li>
            </ul>
            <div className="flex flex-wrap lg:justify-between md:justify-between sm:justify-around justify-around  items-center gap-3 mt-10 ">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="card w-72 bg-slate-100 opacity-60 shadow-xl hover:opacity-75"
              >
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black">Layer Clothing</h2>
                  <p className="text-black">
                    Dress in layers to trap warm air close to your body. Layers
                    can be removed if you get too warm and added if you get
                    cold.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                className="card w-72 bg-slate-100 opacity-60 shadow-xl hover:opacity-75"
              >
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black">Protect Extremities</h2>
                  <p className="text-black">
                    Wear hats, gloves, scarves, and warm socks to prevent heat
                    loss from your head, hands, feet, and neck.
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="card w-72 bg-slate-100 opacity-60 shadow-xl hover:opacity-75"
              >
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black">Stay Dry</h2>
                  <p className="text-black">
                    Wet clothing can make you lose body heat rapidly. Wear
                    waterproof outer layers and change out of wet clothes as
                    soon as possible.
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="card w-72 bg-slate-100 opacity-60 shadow-xl hover:opacity-75"
              >
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black">Prepare Your Home</h2>
                  <p className="text-black">
                    Insulate pipes to prevent freezing, and have emergency
                    supplies such as extra blankets, batteries, flashlights.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSafetyTips;
