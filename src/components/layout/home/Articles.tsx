// Hooks/Actions
import Image from "next/image";

const Articles = () => {
  return (
    <section className="article row p-3 d-flex justify-content-center align-items-center ">
      <div className="col p-0 m-0 col-12 col-md-11 col-lg-9 py-4 row">
        <div className="col-6">
          <div className="position-relative w-100 h-100 ">
            <Image
              src="https://image123.azureedge.net/houseofcars/0010234991070652288-home_inventory.webp"
              fill
              className="object-fit-cover"
              alt="Sumbnail"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="position-relative w-100 h-100 ">
            <Image
              src="https://image123.azureedge.net/houseofcars/9521024093040917-woman-enjoying-her-financially-independence-while-buying-car-min.webp"
              fill
              className="object-fit-cover"
              alt="Sumbnail"
            />
          </div>
          <div className="position-relative w-100 h-100 ">
            <Image
              src="https://image123.azureedge.net/houseofcars/47398665542186436-home._contact us.webp"
              fill
              className="object-fit-cover"
              alt="Sumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
