import { Chart } from "react-google-charts";
import { useGetAllClothsQuery } from "../../redux/features/dashboard/clothManagement.api";
import Loader from "../../utils/Loader";
import { useGetAllUsersQuery } from "../../redux/features/dashboard/userManagement.api";
import {
  HandCoins,
  MessageCircleDashed,
  MessageSquareCode,
  Shirt,
  Users,
} from "lucide-react";
import { useGetAllTestimonialsQuery } from "../../redux/features/dashboard/testimonialManagement.api";
import { useGetAllCommentsQuery } from "../../redux/features/comment/commentManagement.api";
import { useGetAllDonatesQuery } from "../../redux/features/donate/donateManagement.api";

const Dashboard = () => {
  const { data: clothData, isLoading: clothLoading } =
    useGetAllClothsQuery(undefined);
  const { data: userData, isLoading: userLoading } =
    useGetAllUsersQuery(undefined);
  const { data: testimonialData, isLoading: testimonialLoading } =
    useGetAllTestimonialsQuery(undefined);
  const { data: commentData, isLoading: commentLoading } =
    useGetAllCommentsQuery(undefined);
  const { data: donationData, isLoading: donationLoading } =
    useGetAllDonatesQuery(undefined);

  if (
    clothLoading ||
    userLoading ||
    testimonialLoading ||
    commentLoading ||
    donationLoading
  ) {
    return <Loader />;
  }

  const totalCloths = clothData?.data?.length;

  const totalUsers = userData?.data?.length;

  const totalTestimonials = testimonialData?.data?.length;

  const totalComments = commentData?.data?.length;

  const totalDonations = donationData?.data?.length;

  // Prepare data for pie chart
  const chartData = [
    ["Task", "Count"],
    ["Cloths", totalCloths],
    ["Users", totalUsers],
    ["Testimonials", totalTestimonials],
    ["Comments", totalComments],
    ["Donations", totalDonations],
  ];

  const options = {
    title: "Distribute Cloths",
    is3D: true,
  };

  return (
    <div>
      <div className="mt-16 lg:mx-20 md:mx-10 sm:mx-10 mx-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-6 gap-4">
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 lg:flex md:flex sm:flex-wrap flex-wrap justify-center items-center gap-2">
          <div className="px-16 lg:px-0 md:px-0 sm:px-16">
            <Shirt size={40} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold">Cloths</h1>
            <p className="text-white text-2xl font-semibold">{totalCloths}</p>
          </div>
        </div>
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 lg:flex md:flex sm:flex-wrap flex-wrap justify-center items-center gap-2">
          <div className="px-16 lg:px-0 md:px-0 sm:px-16">
            <Users size={40} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold">Users</h1>
            <p className="text-white text-2xl font-semibold">{totalUsers}</p>
          </div>
        </div>
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 lg:flex md:flex sm:flex-wrap flex-wrap justify-center items-center gap-2">
          <div className="px-16 lg:px-0 md:px-0 sm:px-16">
            <MessageSquareCode size={40} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold truncate">
              Testimonials
            </h1>
            <p className="text-white text-2xl font-semibold">
              {totalTestimonials}
            </p>
          </div>
        </div>
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 lg:flex md:flex sm:flex-wrap flex-wrap justify-center items-center gap-2">
          <div className="px-16 lg:px-0 md:px-0 sm:px-16">
            <MessageCircleDashed size={40} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold">Comments</h1>
            <p className="text-white text-2xl font-semibold">{totalComments}</p>
          </div>
        </div>
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 lg:flex md:flex sm:flex-wrap flex-wrap justify-center items-center gap-2">
          <div className="px-16 lg:px-0 md:px-0 sm:px-16">
            <HandCoins size={40} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold truncate">
              Donations
            </h1>
            <p className="text-white text-2xl font-semibold">
              {totalDonations}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full max-w-96 sm:max-w-96 md:max-w-[90%] lg:max-w-[100%]">
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
