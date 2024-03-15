import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.token) as TUser;
      console.log(user);

      dispatch(setUser({ user: { user }, token: res.token }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="">
              <Link
                className="text-lg font-semibold text-blue-400"
                to="/register"
              >
                Sign up now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
