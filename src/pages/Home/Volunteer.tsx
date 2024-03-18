const Volunteer = () => {
  return (
    <div>
      <div className="mx-28 mt-14 mb-20">
        <h1 className="text-2xl font-semibold text-center pb-8">
          Add Volunteer
        </h1>
        <form className="grid grid-cols-2 gap-5">
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-info w-full"
              />
            </div>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <div>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered input-info w-full"
              />
            </div>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered input-info w-full"
              />
            </div>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Location</span>
            </div>
            <select className="select select-bordered select-info">
              <option value="Dhaka">Dhaka</option>
              <option value="Barishal">Barishal</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Jessore">Jessore</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Comilla">Comilla</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Tangail">Tangail</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
