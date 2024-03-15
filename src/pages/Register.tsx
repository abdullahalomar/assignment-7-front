/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { useState } from "react";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    const toastId = toast.loading("Register");
    e.preventDefault();
    try {
      const { data } = await registerUser(formData).unwrap();
      toast.success("User registered successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
      console.log("User registered:", data);
    } catch (error) {
      toast.error("User already exists", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold">Sign up</h1>
          </div>
          <div className="card w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <Link className="text-lg text-blue-600" to="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
