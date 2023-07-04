//Hooks/Packages
import Image from "next/image";
import Link from "next/link";
import React from "react";

//Data
const data = [
  {
    key: 1,
    title: "Sedan",
    src: "https://image123.azureedge.net/houseofcars/07547928653785396-volkswagen_golf_gti_40th_anniversary_2023_4k-HD-min_(1).webp",
    link: "#",
  },
  {
    key: 2,
    title: "Suv",
    src: "https://image123.azureedge.net/houseofcars/23476936249254554-cadillac_lyriq_sport_2024_4k-HD-min.webp",
    link: "#",
  },
];

const BodyStyles = () => {
  return (
    <section
      className="bodystyle p-0 px-0 px-sm-3 px-lg-0 m-0 py-2 py-md-3 py-lg-5 w-100 d-flex row align-items-center justify-content-center"
      style={{ background: "rgb(38, 38, 38)" }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="bodystyle__container col-12  col-md-9 ">
          <h3 className="bodystyle__title pl-4 mb-4 ">Brows Body Style</h3>
          <div className="d-flex flex-column  flex-lg-row w-100 align-items-center justify-content-center gap-2">
            {data.map(({ key, link, src, title }) => (
              <Link
                href={link}
                key={key}
                className="bodystyle__card d-flex  w-100 text-white "
              >
                <figure className="bodystyle__image-container aspect-square w-100 h-100 position-relative overflow-hidden">
                  <Image
                    src={src}
                    fill
                    alt={"Style"}
                    className="bodystyle__image object-fit-cover w-100 h-100 "
                  />

                  <h4 className="bodystyle__image-title position-absolute bottom-0 w-100 py-1 py-sm-2 px-2 h-3">
                    {title}
                  </h4>
                </figure>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyStyles;
