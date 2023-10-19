let Form = () => {
  return (
    <>
      <section className=" col-8 mt-3 m-auto border-1 mb-5 shadow-sm p-4">
        <p className="text-center h1 text-warning mb-5">User Registration</p>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
          <label htmlFor="">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
          <label htmlFor="">Email address </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Mobile Number"
          />
          <label htmlFor="">Mobile Number</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Address"
          ></textarea>
          <label htmlFor="">Address</label>
        </div>

        <div className="mb-3 text-center ">
          <button className="btn btn-success  ms-2 p-2">
            <i class="fa fa-floppy-o" aria-hidden="true"></i> Save
          </button>
          <button className="btn btn-danger   ms-4 p-2 ">
            <i class="fa fa-refresh" aria-hidden="true"></i> Reset
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
