const AdvancedSearch = () => {
  return (
    <section className="p-0 px-2 px-md-3 px-lg-5 m-0 py-5 w-100 d-flex justify-content-center align-items-center bg-dark-2">
      <form className=" search justify-content-center gap-4 gap-sm-2 gap-md-3 align-items-stretch d-flex flex-column flex-lg-row w-100 flex-grow-1 px-lg-5 my-2">
        <div className="w-100  search__input">
          <select
            className="form-select rounded-0 py-2"
            aria-label="Default select example"
            defaultValue={0}
          >
            <option selected value={0}>
              Make
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="w-100  search__input">
          <select
            className="form-select rounded-0 py-2"
            aria-label="Default select example"
            defaultValue={0}
          >
            <option selected value={0}>
              Model{" "}
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="search__input-container d-flex gap-4 gap-sm-2 gap-lg-3 flex-sm-column flex-md-row ">
          <div className="w-100  search__input">
            <select
              className="form-select rounded-0 py-2"
              aria-label="Default select example"
              defaultValue={0}
            >
              <option selected value={0}>
                Min Year{" "}
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="w-100  search__input">
            <select
              className="form-select rounded-0 py-2"
              aria-label="Default select example"
              defaultValue={0}
            >
              <option selected value="0">
                Max Year{" "}
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <button
          className="p-0 m-0 btn btn-danger col-lg-2 col-12 rounded-0 py-1 fs-5 text-uppercase search__input"
          type="submit"
        >
          search
        </button>{" "}
      </form>
    </section>
  );
};

export default AdvancedSearch;
