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
  const [editCommentId, setEditCommentId] = useState();
  const [showCommentModal, setShowCommentModal] = useState(false);

  if (commentLoading) {
    return <Loader />;
  }

  const onUpdateModalClose = () => {
    setShowCommentModal(false);
  };

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
        <form className="" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="mt-7">
        {comments?.data.map((comment) => (
          <div key={comment._id} className="">
            {/* Comment content */}
            <div
              className="chat chat-start relative w-full min-w-[200px] mb-5"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <div className="dropdown dropdown-hover absolute z-10 top-3 right-[9.8%]">
                {currentUser && currentUser.name === comment.name && (
                  <div tabIndex={0} className="m-1">
                    <CircleEllipsis
                      size={25}
                      color="white"
                      onClick={() => {
                        setShowCommentModal(true);
                        setEditCommentId(comment._id);
                      }}
                    />
                  </div>
                )}
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-slate-300 rounded-box"
                >
                  {currentUser && currentUser?.name === comment.name && (
                    <li>
                      <button onClick={() => handleDeleteComment(comment._id)}>
                        <Trash2 color="red" />
                      </button>
                    </li>
                  )}
                </ul>
              </div>

              <div className="chat-bubble me-8">{comment.description}</div>
              <div className="opacity-100 bg-gray-300 rounded-xl p-2 mt-1">
                <span className="font-semibold text-black">{comment.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showCommentModal && (
        <UpdateCommentModal
          onClose={onUpdateModalClose}
          commentId={editCommentId}
          isUpdate={true}
        />
      )}
    </div>
  );
};

export default Community;
