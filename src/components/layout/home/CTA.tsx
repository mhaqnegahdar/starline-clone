const CTA = () => {
  return (
    <section className="cta object-fit-cover position-relative d-flex  ">
      <div className="cta__shape1 position-absolute top-0 end-0 h-100 z-2"></div>
      <div className="cta__shape2 position-absolute top-0 end-0 h-100 z-2"></div>
      <div className=" w-100 text-md-end text-center  p-0 m-0 col-12 col-md-7 col-lg-5 px-3 px-md-5  pt-md-5 h-100 d-flex flex-column justify-content-center  position-absolute z-3">
        Get Approved Now
        <h1 className="cta__title p-0 m-0 mb-2 fw-bold">
          Apply for <br></br>financing
        </h1>
        <div className="px-1 px-md-2 pb-1 m-0"></div>
        <div>
          <button className="cta__button btn btn-danger rounded-0 p-2 m-0 fs-5 py-1">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
