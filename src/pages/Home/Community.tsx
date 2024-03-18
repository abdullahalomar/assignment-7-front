import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetAllCommentsQuery,
} from "../../redux/features/comment/commentManagement.api";
import { TResponse } from "../../types/global";
import { toast } from "sonner";
import Loader from "../../utils/Loader";
// import { CircleEllipsis } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
// import { useState } from "react";
// import UpdateCommentModal from "../../components/layouts/UpdateCommentModal";

const Community = () => {
  const { register, handleSubmit, reset } = useForm();

  const [addComment] = useAddCommentMutation();
  const { data: comments, isLoading: commentLoading } =
    useGetAllCommentsQuery(undefined);

  // const [deleteCommentMutation] = useDeleteCommentMutation();
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

    const toastId = toast.loading("Creating...");

    try {
      const commentData = {
        name: data.name,
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
  // const handleDeleteComment = async (commentId: string) => {
  //   const toastId = toast.loading("Deleting...");
  //   try {
  //     await deleteCommentMutation(commentId);
  //     toast.success("Delete Successfully", { id: toastId, duration: 2000 });
  //   } catch (error) {
  //     console.error("Error deleting Comment:", error);
  //   }
  // };

  return (
    <div className="py-20 px-28">
      <div className="w-full mb-10">
        <form
          className="flex justify-start items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-info w-full max-w-xs"
                {...register("name", { required: true, maxLength: 20 })}
              />{" "}
            </div>
            <div>
              <textarea
                placeholder="Comment Here"
                className="textarea textarea-info textarea-bordered textarea-lg w-full max-w-xs"
                {...register("description", { required: true })}
              />
            </div>
          </div>
          {currentUser ? (
            <button className="btn btn-primary ms-5">Comment</button>
          ) : (
            <button className="btn btn-primary ms-5" disabled={!currentUser}>
              Comment
            </button>
          )}
        </form>
      </div>
      <div className="mt-5 lg:flex lg:flex-wrap md:flex md:flex-wrap sm:flex sm:flex-wrap flex flex-wrap gap-7">
        {comments?.data.map((comment) => (
          <div
            key={comment._id}
            className="bg-gray-500 p-4 rounded-lg outline outline-slate-600 outline-1 outline-offset-2 relative lg:w-[480px]"
          >
            {/* Comment content */}
            <div className="">
              <div className="badge badge-primary font-semibold">
                {comment.name}
              </div>
              <p className="text-md text-white font-medium me-1 mt-3">
                {comment.description}
              </p>
              {/* {currentUser ? (
                <div className="dropdown dropdown-top p-2 rounded-full hover:bg-gray-700 absolute top-0 right-0">
                  <div tabIndex={0}>
                    <CircleEllipsis color="white" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-slate-200 rounded-box w-52"
                  >
                    <li>
                      <button
                        onClick={() => {
                          setShowCommentModal(true);
                          setEditCommentId(comment._id);
                        }}
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleDeleteComment(comment._id)}>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              ) : null} */}
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
