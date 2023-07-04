import React from "react";
import CopyRight from "./CopyRight";
import FooterLinks from "./FooterLinks";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <footer
      className="footer p-0 m-0 w-100 pt-2 d-flex justify-content-center flex-wrap pt-md-3 pt-lg-4 bg-dark-2"
      style={{ position: "relative", backgroundColor: "#111" }}
    >
      <FooterInfo />
      <FooterLinks />
      <CopyRight />
    </footer>
  );
};

export default Footer;
