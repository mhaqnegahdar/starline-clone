import Link from "next/link";
import Image from "next/image";

const CopyRight = () => {
  return (
    <div className="footer__copyright w-100 d-flex flex-column flex-sm-row  justify-content-around align-items-center">
      <div>
        <Link href="#" className="text-white">
          &copy; {new Date().getFullYear()} House Of Cars
        </Link>
      </div>
      <div className=" p-0 px-1 m-0 py-2 text-decoration-none d-flex align-items-center">
        <p> Powered by</p>
        <Image
          src="/images/hillz_big_logo.png"
          width={30}
          height={30}
          alt="Logo"
          className="mx-2"
        />
        <p>Hillz Dealer</p>
      </div>
      <div>
        <Link href="#" className="text-white">
          <p> Privacy & Policy</p>
        </Link>
      </div>
    </div>
  );
};

export default CopyRight;
