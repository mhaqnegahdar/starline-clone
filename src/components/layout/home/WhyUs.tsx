// Icons
import { BsCarFrontFill } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { FaTags } from "react-icons/fa";

const data = [
  {
    key: 1,
    icon: FaTags,
    title: "Financing Made Easy",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    key: 2,
    icon: BsCarFrontFill,
    title: "Wide Range and Brand",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    key: 3,
    icon: IoIosChatbubbles,
    title: "Trusted by thousands",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    key: 4,
    icon: IoIosChatbubbles,
    title: "Car Service & Maintenance",
    info: "Our stress-free finance department that can find financial solutions to save you money.",
  },
];
const WhyUs = () => {
  return (
    <section className=" whyus row p-0 m-0 w-100 px-md-0 justify-content-center py-4 bg-dark-2">
      <h3 className="whyus__heading text-uppercase text-center p-0 m-0 pt-5 pb-4  ">
        Why Choose Us
      </h3>
      <div className="p-4 row">
        {data.map(({ key, icon: Icon, title, info }) => (
          <div
            key={key}
            className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center justify-content-center gap-3 py-3 px-4 "
          >
            <div className="rounded-circle bg-danger p-4 d-flex justify-content-center align-items-center">
              {Icon && <Icon size={30} />}
            </div>
            <div className="text-center fw-bold h5">{title}</div>
            <div className="text-center">{info}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
