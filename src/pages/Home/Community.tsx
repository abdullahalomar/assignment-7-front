import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  useAddCommentMutation,
  useGetAllCommentsQuery,
} from "../../redux/features/comment/commentManagement.api";
import { TResponse } from "../../types/global";
import { toast } from "sonner";
import Loader from "../../utils/Loader";

const Community = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addComment] = useAddCommentMutation();
  const { data: comments, isLoading } = useGetAllCommentsQuery(undefined);
  console.log(comments);

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    const toastId = toast.loading("Creating...");

    try {
      const commentData = {
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

  return (
    <div className="py-20 px-28">
      <div className="w-full mb-10">
        <form
          className="flex justify-start items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            placeholder="Comment Here"
            className="textarea textarea-info textarea-bordered textarea-lg w-full max-w-xs"
            {...register("description")}
          />
          <button className="btn btn-primary ms-5">Comment</button>
        </form>
      </div>
      <div className="mt-5 flex flex-wrap gap-10">
        {comments?.data.map((comment) => (
          <div
            key={comment._id}
            className="outline outline-offset-2 outline-3 rounded-badge w-80"
          >
            <div className="p-5">
              <p>{comment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
