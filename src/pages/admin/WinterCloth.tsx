/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteClothMutation,
  useGetAllClothsQuery,
} from "../../redux/features/dashboard/clothManagement.api";
import { TQueryParams } from "../../types/global";
import { toast } from "sonner";
import { FilePenLine, Trash } from "lucide-react";
import Loader from "../../utils/Loader";
import UpdateClothModal from "../../components/layouts/UpdateClothModal";

const WinterCloth = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const [editClothId, setEditClothId] = useState();
  const [showClothModal, setShowClothModal] = useState(false);
  const [deleteClothMutation] = useDeleteClothMutation();

  const onUpdateModalClose = () => {
    setShowClothModal(false);
  };

  // get data
  const { data: clothData, isLoading } = useGetAllClothsQuery(params);

  console.log({ isLoading });

  if (isLoading) {
    return <Loader />;
  }

  // delete data
  const handleDeleteCloth = async (clothId: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteClothMutation(clothId);

      toast.success("Delete Successfully", { id: toastId, duration: 2000 });
    } catch (error) {
      console.error("Error deleting cloth:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-6">
        All Winter Cloths
      </h1>
      <Link
        to="/dashboard/create-winter-clothes"
        className="btn btn-outline btn-wide btn-primary ms-10 mb-5"
      >
        Add Cloth
      </Link>
      <div className="overflow-x-auto mx-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clothData?.data?.map((cloth, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{cloth.title}</td>
                <td>{cloth.category}</td>
                <td>{cloth.size}</td>
                <td className="">
                  {/* edit */}
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    onClick={() => {
                      setShowClothModal(true);
                      setEditClothId(cloth._id);
                    }}
                    className="btn btn-warning me-4"
                  >
                    <FilePenLine />
                  </button>

                  {/* delete */}
                  <button
                    onClick={() => handleDeleteCloth(cloth._id)}
                    className="btn btn-error"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showClothModal && (
        <UpdateClothModal
          onClose={onUpdateModalClose}
          clothId={editClothId}
          isUpdate={true}
        />
      )}
    </div>
  );
};

export default WinterCloth;
