import { useGetAllDonatesQuery } from "../../redux/features/donate/donateManagement.api";
import Loader from "../../utils/Loader";

const Leaderboard = () => {
  const { data: donors, isLoading } = useGetAllDonatesQuery("");

  if (isLoading) {
    return <Loader />;
  }

  const sortedDonors = [...donors?.data].sort(
    (donor1, donor2) => donor2.amount - donor1.amount
  );
  return (
    <div className="mx-28 pt-14 pb-20">
      <h1 className="text-3xl font-semibold text-center mb-7">Top Donor's</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Donation Amount</th>
            </tr>
          </thead>
          <tbody>
            {sortedDonors?.map((donor, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{donor.userName}</td>
                <td>{donor.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
