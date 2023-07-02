// Hooks/Actions
import Image from "next/image";
import Link from "next/link";
// Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const InfoBar = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-5  py-3">
        <Link href={"#"}>
          <Image
            src={`https://image123.azureedge.net/houseofcars/9168930046748802-9391419316301419-photo_2023-06-08_23-34-49-removebg-preview321.png`}
            width={150}
            height={90}
            className="d-block"
            alt="Logo"
          />
        </Link>
        <div className="info d-flex gap-4 d-none d-lg-flex">
          <div className=" d-flex justify-content-center align-items-center gap-2 ">
            <HiLocationMarker size={17} className="text-danger" />
            <p>103 - 8215 Lawson Rd, Milton, Ontario, L9T 5E5</p>
          </div>
          <div className=" d-flex justify-content-center align-items-center gap-2 ">
            <BsFillTelephoneFill size={17} className="text-danger" />
            <p>905-782-5159</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBar;
