import Link from "next/link";
import { AiTwotonePhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const times = [
  { key: 1, day: "Monday", hour: "10:00 AM - 05:00 PM" },
  { key: 2, day: "Tuesday", hour: "10:00 AM - 05:00 PM" },
  { key: 3, day: "Wednesday", hour: "10:00 AM - 05:00 PM" },
  { key: 4, day: "Thursday", hour: "10:00 AM - 05:00 PM" },
  { key: 5, day: "Friday", hour: "10:00 AM - 05:00 PM" },
  { key: 6, day: "Saturday", hour: "10:00 AM - 05:00 PM" },
  { key: 7, day: "Sunday", hour: "close" },
];

const FooterInfo = () => {
  return (
    <div className="footer-info p-0 m-0 col-11 d-flex row p-1 p-md-2 justify-content-center align-items-stretch">
      <div className=" p-0 m-0 col-lg-4 col-12 px-sm-3 row pb-lg-0 pb-4">
        <div className="col-sm-6 col-12 col-lg-12 px-2 ">
          <h4 className="py-2 align-items-center ">Dealership</h4>
          <p>
            We know that buying a car may be a huge decision and can be
            unpleasant. We endeavor to assist make this prepare as simple and
            push free as conceivable. We have been in trade for a long time,
            offering tall quality cars at the foremost reasonable costs. We
            endeavor to surpass all your desires when buying a car.
          </p>
        </div>
        <div className="p-0 m-0 col-12 col-sm-6 col-lg-12 pt-lg-2 px-2 ">
          <h4 className="py-2 align-items-center ">Contact Us</h4>
          <address className="mb-0 py-1">
            <HiLocationMarker size={18} className=" me-1" />
            103 - 8215 Lawson Rd, Milton, Ontario, L9T 5E5
          </address>
          <div className="mb-0 py-1">
            <AiTwotonePhone size={18} className="me-1 text-white" />
            <Link href={`tel:9057825159`} className="text-white">
              905-782-5159
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 col-12 px-1 ">
        <h4 className="py-2 align-items-center ">Business Hours</h4>
        <div className="m-0 p-0 w-100">
          {times.map(({ key, day, hour }) => (
            <div
              key={key}
              className="w-100 py-1 d-flex justify-content-between list-unstyled"
            >
              <p>{day}</p> <p>{hour}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-5 col-sm-6 col-12 p-3">
        <iframe
          allow="geolocation"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11567.612124280397!2d-79.8796871!3d43.5460632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6fe7da895f89%3A0x7fc19207345e30c9!2sHouse%20of%20Cars!5e0!3m2!1sen!2s!4v1685906118455!5m2!1sen!2s"
          className="border-0 w-100"
          aria-hidden="false"
          id="iframe"
          width="100%"
          height="300"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterInfo;
