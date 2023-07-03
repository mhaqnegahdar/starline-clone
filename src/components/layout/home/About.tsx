const About = () => {
  return (
    <section className="about object-fit-cover position-relative row ">
      <div className="about__shape1 position-absolute top-0 start-0 h-100 z-2"></div>
      <div className="about__shape2 position-absolute top-0 start-0 h-100 z-2"></div>
      <div className="p-0 m-0 col-12 col-md-10 col-lg-7 col-xl-6 px-3 px-md-5 h-100 d-flex flex-column justify-content-around  position-absolute z-3">
        <div className=" w-100 p-0 m-0  col-md-7  px-3 px-md-5">
          <h1 className="p-0 px-2 m-0 py-4">
            Welcom to<br></br>House Of Cars
          </h1>
          <div className="px-1 px-md-2 pb-1 m-0">
            <p className="lh-3 py-3">
              We know that buying a car may be a huge decision and can be
              unpleasant. We endeavor to assist make this prepare as simple and
              push free as conceivable. We have been in trade for a long time,
              offering tall quality cars at the foremost reasonable costs. We
              endeavor to surpass all your desires when buying a car.
            </p>
            <p className="lh-3 py-3">
              Take a see at our current offerings but if you are doing not see
              precisely what you need let us know as we will nearly continuously
              discover the precise car you&lsquo;re searching for through our
              expansive organize of industry associations.
            </p>
          </div>
          <div>
            <button className="about__button btn btn-danger p-2 m-0 fs-5 py-2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
