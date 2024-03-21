import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetAllCommentsQuery,
} from "../../redux/features/comment/commentManagement.api";
import { TResponse } from "../../types/global";
import { toast } from "sonner";
import Loader from "../../utils/Loader";
import { CircleEllipsis, FilePenLine, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useState } from "react";
import UpdateCommentModal from "../../components/layouts/UpdateCommentModal";

const Community = () => {
  const { register, handleSubmit, reset } = useForm();

  const [addComment] = useAddCommentMutation();
  const { data: comments, isLoading: commentLoading } =
    useGetAllCommentsQuery(undefined);

  const [deleteCommentMutation] = useDeleteCommentMutation();
  const currentUser = useSelector(selectCurrentUser);
  // const [editCommentId, setEditCommentId] = useState();
  // const [showCommentModal, setShowCommentModal] = useState(false);

  if (commentLoading) {
    return <Loader />;
  }

  // const onUpdateModalClose = () => {
  //   setShowCommentModal(false);
  // };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const toastId = toast.loading("Commenting...");

    try {
      const commentData = {
        name: currentUser?.name,
        description: data.description,
      };

      const res = (await addComment(commentData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Comment added successfully", { id: toastId });

        reset();
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  // delete comment
  const handleDeleteComment = async (commentId: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteCommentMutation(commentId);
      toast.success("Delete Successfully", { id: toastId, duration: 2000 });
    } catch (error) {
      console.error("Error deleting Comment:", error);
    }
  };

  return (
    <div className="py-20 px-28">
      <div className="w-full mb-10">
        <form className="text-black" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                value={currentUser?.name || ""}
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>
          </div>{" "}
          <div className="my-5">
            <textarea
              {...register("description", { required: true })}
              placeholder="Comment Here"
              className="textarea textarea-bordered textarea-lg w-full max-w-screen-xl"
            ></textarea>
          </div>
          {currentUser ? (
            <button className="btn btn-primary  w-full max-w-screen-xl">
              Comment
            </button>
          ) : (
            <button className="btn btn-primary ms-5" disabled={!currentUser}>
              Comment
            </button>
          )}
        </form>
      </div>
      <hr />
      <h1 className="text-xl text-center">Appreciation's for the support</h1>
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:place-content-evenly lg:place-items-center gap-10 sm:gap-10 md:gap-10 lg:gap-5">
        {comments?.data.map((comment) => (
          <div key={comment._id} className="">
            {/* Comment content */}

            <div className="card w-[220px] sm:w-[390px] md:w-[290px] lg:w-[400px] bg-gradient-to-r from-neutral to-indigo-300 shadow-xl relative">
              <div className="card-body">
                <h2 className="card-title">{comment.name}</h2>
                <p>{comment.description}</p>
              </div>

              <div className="dropdown dropdown-top absolute z-10 top-2 right-2">
                <div tabIndex={0} role="button" className="">
                  {currentUser && currentUser.name === comment.name && (
                    <div tabIndex={0} className="m-1">
                      <CircleEllipsis size={25} color="black" />
                    </div>
                  )}
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2">
                  {currentUser && currentUser?.name === comment.name && (
                    <li>
                      <button onClick={() => handleDeleteComment(comment._id)}>
                        <Trash2 color="red" />
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {showCommentModal && (
        <UpdateCommentModal
          onClose={onUpdateModalClose}
          commentId={editCommentId}
          isUpdate={true}
        />
      )} */}
    </div>
  );
};

export default Community;
