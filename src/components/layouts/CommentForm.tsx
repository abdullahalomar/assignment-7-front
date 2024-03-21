import { useForm } from "react-hook-form";
import { useUpdateCommentMutation } from "../../redux/features/comment/commentManagement.api";
import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CommentForm = ({ onClose, comment, isUpdate }: any) => {
  const { register, handleSubmit, reset } = useForm();
  const [updateComment] = useUpdateCommentMutation();

  const onSubmit = async (data: any) => {
    console.log(data);

    const toastId = toast.loading("Updating...");

    const commentData = {
      name: data?.name,
      description: data?.description,
    };

    if (isUpdate) {
      try {
        // Update cloth data
        await updateComment({
          commentId: comment?._id,
          data: commentData,
        });

        toast.success("Comment updated successfully", { id: toastId });
      } catch (error) {
        toast.error("Failed to update Comment", { id: toastId });
      }
    } else {
      toast.error("Data not updated", { id: toastId });
    }

    reset();
    onClose();
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-12">
          <div>
            <span className="label-text">Comment</span>
            <br />
            <textarea
              defaultValue={comment?.name}
              className="textarea textarea-bordered textarea-xs w-full max-w-xs mt-3"
              {...register("name")}
            ></textarea>
          </div>
          <div>
            <span className="label-text">Comment</span>
            <br />
            <textarea
              defaultValue={comment?.description}
              className="textarea textarea-bordered textarea-xs w-full max-w-xs mt-3"
              {...register("description")}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-info mt-5 ms-12">
          Update
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
