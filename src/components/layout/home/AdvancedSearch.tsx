const AdvancedSearch = () => {
  return (
    <section className="p-0 px-2 px-md-3 px-lg-5 m-0 py-5 w-100 d-flex justify-content-center align-items-center bg-dark-2">
      <form className="row justify-content-center gap-4 align-items-stretch d-flex">
        <div className="col-lg-2  col-12">
          <select
            className="form-select rounded-0 py-2"
            aria-label="Default select example"
          >
            <option selected value=" ">
              Open this select menu
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-lg-2  col-12">
          <select
            className="form-select rounded-0 py-2"
            aria-label="Default select example"
          >
            <option selected value=" ">
              Open this select menu
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="p-0 col-lg-2 col-md-6 col-12">
          <select
            className="form-select rounded-0 py-2"
            aria-label="Default select example"
          >
            <option value=" " selected>
              Open this select menu
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="p-0 col-lg-2 col-md-6 col-12">
          <select
            className="form-select rounded-0 py-2"
            aria-label="Default select example"
          >
            <option selected value=" ">
              Open this select menu
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button
          className="p-0 m-0 btn btn-danger col-lg-2 col-12 rounded-0 py-1 fs-5"
          type="submit"
        >
          Button
        </button>{" "}
      </form>
    </section>
  );
};

export default AdvancedSearch;
