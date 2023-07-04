// Hooks/Actions
import Image from "next/image";
import Link from "next/link";

// Icons
import { BsCarFrontFill } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const Articles = () => {
  return (
    <section className="article row p-4 justify-content-center align-items-center ">
      <div className="article__container  p-0 m-0 col-12 col-md-11 col-lg-9 py-4 d-flex flex-column flex-lg-row gap-xl-3 gap-lg-2  gap-4 ">
        <Link
          href="#"
          className="card article__card article__card--first position-relative flex-grow-1   rounded-4 overflow-hidden"
        >
          <Image
            src="https://image123.azureedge.net/houseofcars/0010234991070652288-home_inventory.webp"
            fill
            className="article__image object-fit-cover"
            alt="Sumbnail"
          />
          <div className="article__info  position-absolute top-50 start-50  translate-middle d-flex flex-column align-items-center justify-content-center py-2 px-3  z-3">
            <BsCarFrontFill size={50} className="text-danger" />
            <p className="text-uppercase py-2 text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, quibusdam!
            </p>
            <button className="border border-2 border-danger  bg-transparent p-2 text-white">
              View Inventory
            </button>
          </div>
        </Link>
        <div className="flex-grow-1 d-flex flex-column gap-xl-3 gap-lg-2  gap-4">
          <Link
            href="#"
            className="article__card position-relative w-100   rounded-4 overflow-hidden border-none"
          >
            <Image
              src="https://image123.azureedge.net/houseofcars/9521024093040917-woman-enjoying-her-financially-independence-while-buying-car-min.webp"
              fill
              className="article__image object-fit-cover"
              alt="Sumbnail"
            />
            <div className="article__info  position-absolute top-50 start-50  translate-middle d-flex flex-column align-items-center justify-content-center py-2 px-3  z-3">
              <FaDollarSign size={50} className="text-danger" />
              <p className="text-uppercase py-2 text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quibusdam!
              </p>
              <button className="border border-2 border-danger  bg-transparent p-2 text-white text-uppercase">
                Apply For Financing
              </button>
            </div>
          </Link>
          <Link
            href="#"
            className="article__card position-relative w-100  rounded-4 overflow-hidden "
          >
            <Image
              src="https://image123.azureedge.net/houseofcars/47398665542186436-home._contact us.webp"
              fill
              className="article__image object-fit-cover"
              alt="Sumbnail"
            />
            <div className="article__info  position-absolute top-50 start-50  translate-middle d-flex flex-column align-items-center justify-content-center py-2 px-3  z-3">
              <IoIosChatbubbles size={50} className="text-danger" />
              <p className="text-uppercase py-2 text-white text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, quibusdam!
              </p>
              <button className="border border-2 border-danger  bg-transparent p-2 text-white text-uppercase">
                Contact Us{" "}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles;
