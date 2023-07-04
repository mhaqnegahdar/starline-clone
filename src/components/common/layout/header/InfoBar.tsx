// Hooks/Actions
import Image from "next/image";
import Link from "next/link";
// Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
// Toggle
import { ToggleStateType } from "@/types";

const InfoBar = ({ toggle, setToggle }: ToggleStateType) => {
  return (
    <>
      <div className=" infobar d-flex justify-content-between align-items-center  p-0 m-0 pt-2 pt-md-3  px-lg-5 px-sm-3 px-0 ">
        <Link href={"#"}>
          <Image
            src={`https://image123.azureedge.net/houseofcars/9168930046748802-9391419316301419-photo_2023-06-08_23-34-49-removebg-preview321.png`}
            width={150}
            height={90}
            className="d-block"
            alt="Logo"
          />
        </Link>
        {/* Contact Info */}
        <div className="info d-flex gap-4 d-none d-lg-flex">
          <div className=" d-flex justify-content-center align-items-center gap-2 ">
            <HiLocationMarker size={17} className="text-danger" />
            <span>103 - 8215 Lawson Rd, Milton, Ontario, L9T 5E5</span>
          </div>
          <div className=" d-flex justify-content-center align-items-center gap-2 ">
            <BsFillTelephoneFill size={17} className="text-danger" />
            <span>905-782-5159</span>
          </div>
        </div>
        {/* Toggle Info */}
        <div
          className="infobar__burgur-icon d-block d-lg-none  "
          onClick={() => setToggle(p => (p == false ? true : false))}
        >
          {toggle === false ? (
            <RxHamburgerMenu size={30} />
          ) : (
            <AiOutlineClose size={30} />
          )}
        </div>
      </div>
    </>
  );
};

export default InfoBar;
