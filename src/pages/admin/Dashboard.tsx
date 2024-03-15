import { Chart } from "react-google-charts";
import { useGetAllClothsQuery } from "../../redux/features/dashboard/clothManagement.api";
import Loader from "../../utils/Loader";
import { useGetAllUsersQuery } from "../../redux/features/dashboard/userManagement.api";
import { Shirt, Users } from "lucide-react";

const Dashboard = () => {
  const { data: clothData, isLoading } = useGetAllClothsQuery(undefined);
  const { data: userData, isLoading: userLoading } =
    useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (userLoading) {
    return <Loader />;
  }

  const totalCloths = clothData?.data?.length;

  const totalUsers = userData?.data?.length;

  // Prepare data for pie chart
  const chartData = [
    ["Task", "Count"],
    ["Cloths", totalCloths],
    ["Users", totalUsers],
  ];

  const options = {
    title: "Distribute Cloths",
    is3D: true,
  };

  return (
    <div>
      <div className="mt-20 lg:mx-20 md:mx-10 sm:mx-10 mx-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 md:gap-10 gap-4">
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 flex justify-center items-center gap-5">
          <div>
            <Shirt size={50} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold">Cloths</h1>
            <p className="text-white text-2xl font-semibold">
              {clothData?.data?.length}
            </p>
          </div>
        </div>
        <div className="bg-cyan-400 rounded-xl text-center py-8 outline outline-offset-2 outline-2 outline-slate-500 flex justify-center items-center gap-5">
          <div>
            <Users size={50} color="white" />
          </div>
          <div>
            <h1 className="text-slate-700 text-xl font-bold">Users</h1>
            <p className="text-white text-2xl font-semibold">
              {userData?.data?.length}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
