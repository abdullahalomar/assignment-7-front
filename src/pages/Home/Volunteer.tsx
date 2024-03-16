import nonProfit from "/src/assets/images/non.png";
import volunteer from "/src/assets/images/volunteer.png";
import comunity from "/src/assets/images/comunity.png";
import initiative from "/src/assets/images/own-initiative.png";
import municipal from "/src/assets/images/municipal.png";
import club from "/src/assets/images/club.png";
import { motion } from "framer-motion";

const Volunteer = () => {
  return (
    <div className="lg:mx-28 md:mx-28 sm:mx-28 mx-6 py-28">
      <motion.div
        animate={{ x: 10 }}
        transition={{ ease: "easeOut", duration: 5 }}
        className="grid lg:grid-cols-4 lg:place-content-between lg:place-items-center gap-16"
      >
        <div className="col-span-2">
          <h1 className="text-5xl font-semibold">Volunteer Opportunities</h1>
          <p className="text-xl font-normal mt-5 text-slate-700">
            Volunteering opportunities related to design for distributing winter
            clothing can be found in various organizations and initiatives
            focused on community welfare, humanitarian aid, or social services.
          </p>
        </div>
        <div>
          <img src={nonProfit} alt="" />
          <h1 className="text-2xl font-semibold">
            Local Nonprofit Organizations
          </h1>
        </div>
        <div>
          <img src={volunteer} alt="" />

          <h1 className="text-2xl font-semibold">Online Volunteer Platforms</h1>
        </div>
        <div className="">
          <img src={comunity} alt="" />

          <h1 className="text-2xl font-semibold">Online Communities</h1>
        </div>
        <div className="">
          <img src={initiative} alt="" />

          <h1 className="text-2xl font-semibold">Create Your Own Initiative</h1>
        </div>
        <div className="">
          <img src={municipal} alt="" />

          <h1 className="text-2xl font-semibold">Municipal Programs</h1>
        </div>
        <div className="">
          <img src={club} alt="" />

          <h1 className="text-2xl font-semibold">
            School and University Clubs
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Volunteer;
